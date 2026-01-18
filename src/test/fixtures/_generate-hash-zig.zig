const std = @import("std");
const argon2 = std.crypto.pwhash.argon2;
const scrypt = std.crypto.pwhash.scrypt;
const print = std.debug.print;

const OUT_PATH = "src/test/fixtures/zig-hash.txt";

pub fn main() !void {
    const allocator = std.heap.smp_allocator;
    var buffer = std.mem.zeroes([1024]u8);

    const cwd = std.fs.cwd();
    const file = try cwd.createFile(OUT_PATH, .{});
    defer file.close();

    var write_buffer: [1024]u8 = undefined;
    var writer = std.fs.File.writer(file, &write_buffer);

    const passwords: [1][]const u8 = .{"password"};
    for (passwords) |password| {
        const argon2_modes: [3]argon2.Mode = .{ argon2.Mode.argon2i, argon2.Mode.argon2d, argon2.Mode.argon2id };
        for (argon2_modes) |mode| {
            const hash = try argon2.strHash(password, .{
                .allocator = allocator,
                .params = argon2.Params{ .t = 4, .m = 1024, .p = 2 },
                .encoding = .phc,
                .mode = mode,
            }, &buffer);

            try writer.interface.print("{s}:{s}\n", .{ password, hash });
        }

        const hash = try scrypt.strHash(password, .{
            .allocator = allocator,
            .params = scrypt.Params{
                .ln = 10,
                .r = 8,
                .p = 2,
            },
            .encoding = .phc,
        }, &buffer);

        try writer.interface.print("{s}:{s}\n", .{ password, hash });
    }

    try writer.interface.flush();
}

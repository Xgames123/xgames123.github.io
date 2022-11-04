inputstr = bytearray("", "ascii")
offsets = []
i = 0

output_str = "";
for character in inputstr:
    output_str+=chr(character+offsets[i])
    i+=1
print(output_str);
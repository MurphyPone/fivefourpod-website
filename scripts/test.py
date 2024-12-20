sample_line = "Peter: And Michael."

idx = sample_line.index(":")

name = sample_line[:idx]
cleaned_line = f"<b>{name}</b>{sample_line[idx:]}"
print(sample_line)
print(cleaned_line)
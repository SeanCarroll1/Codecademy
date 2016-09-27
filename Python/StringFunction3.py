def censor(text, word):
    length = len(word)
    return text.replace(word, '*' * length)
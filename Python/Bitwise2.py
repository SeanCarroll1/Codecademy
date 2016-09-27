def flip_bit(number, n):
    mask = 0b1 << (n-1)
    result = number ^ mask
    print bin(result)
    return bin(result)
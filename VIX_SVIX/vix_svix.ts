## Only for educational purposes

## Original IDEA from : NextGen https://x.com/stephenharlinmd/status/1708920781206380917?s=20

input symb_1 = "/VXV23";
input symb_2 = "/VXX23";
 
script Scale {
    input c = close;
    def Min = LowestAll(close);
    def Max = HighestAll(close);
    def hh = HighestAll(c);
    def ll = LowestAll(c);
    plot Range = (((Max - Min) * (c - ll)) /  (hh - ll)) + Min;
}
plot diff = Scale(close(symb_2) - close(symb_1));

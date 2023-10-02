## Original Author of the script is NextGenSignals Twitter Handle @stephenharlinmd
## Details @ https://x.com/stephenharlinmd/status/1708146734587621505?s=20

input expirationDate = 20231021;
def ATR = MovingAverage(AverageType.WILDERS, TrueRange(high, close, low), 5);
def MA = Average(close, 100);
def range = high - low;
def m = 6 * (WMA(OHLC4, 6) - Average(OHLC4, 6)) / (6 - 1);

def atmVolume = volume(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT));

AddChartBubble(
close < open 
and atmVolume > 10 
and m > 0 
and high > MA 
and range > ATR 
and open > close[4], high, "Buy" + "\nPUTS", Color.WHITE, yes);

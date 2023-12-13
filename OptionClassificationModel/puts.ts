## Idea shared by NextSignals on X/Twitter   
## https://x.com/stephenharlinmd/status/1708146734587621505?s=20
## https://x.com/stephenharlinmd/status/1734362680188604652?s=20
## Only for Educational Purpose No Investment Advise do your own Due Dilligance

input expirationDate = 20240120;
def ATR = MovingAverage(AverageType.WILDERS, TrueRange(high, close, low), 5);
def MA = Average(close, 100);
def range = high - low;
def m = 6 * (WMA(OHLC4, 6) - Average(OHLC4, 6)) / (6 - 1);


def atm_price_calls = close(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL));


def atmVolumeCALL = volume(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL));
AddChartBubble(
close > open 
and atmVolumeCALL > 10
and m > 0 
and high > MA 
and range > ATR 
and open > close[4], high, "Buy\nCalls", Color.YeLLOW, yes);


plot premium_atm_call = atm_price_calls * 100 * atmVolumeCALL;
premium_atm_call.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
premium_atm_call.SetLineWeight(4);
premium_atm_call.HideBubble();
premium_atm_call.HideTitle();

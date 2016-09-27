def median(lst):
    srtlst=sorted(lst)
    if len(srtlst)%2!=0:
        return srtlst[int(len(srtlst)/2+0.5)]
    else:
         return (srtlst[len(srtlst)/2]+srtlst[len(srtlst)/2-1])/2.0
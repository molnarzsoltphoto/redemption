s=open('shell.html').read()
cases=''.join(open(f).read()+'\n' for f in ['case1.js','case2.js','case3.js','case4.js','case5.js','case6.js','case7.js','case8.js','case9.js','case10.js'] if __import__('os').path.exists(f))
s=s.replace('/*CASES*/',cases).replace('/*ENGINE*/',open('engine.js').read())
open('revesz.html','w').write(s); print(len(s))

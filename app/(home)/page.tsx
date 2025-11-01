import Link from 'next/link';

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  const asciiArt = `                                                                                      
                                                                            :                            .  .                                             
                                                                                            .  .. ......... .                                             
                                                                                         .  ....:. .....:...:...:   .                                     
                                                                                         ..:.....:..::=::..::...:..::::::       :                         
                                                                                       ..... ...::.:..::::::::::::::+ ..                                  
                                                                               ..      ....:::::::::%::::..-:::::.:::-::.              .                  
                                                                        =:      ...-....-:..:::::=%.::::::--%.:--:--::-:::...                             
                                                                               .......:::#::-::::*.::::=--==-.:---=--:--.--::.                            
                                                                             .....::::*%:::::@..:.:-::------+@-*=----=:=---:.:                            
                                                                               .:::::::.:::::--:-=-#--:---.--@--==----:----:   .::                        
                                      :                                 -       ..::.:..:-----#=--:%====*+-==@@:===-------::::*::::                       
                                                                           .....:....:::---:-=@::-=##==.:+%*@-..--%:#--:--#:-::-::::::                    
                                                                        ..:::::::::::==*-==:==@@=#-=@==:=*@===+=%@*-==#-:====---:                         
                                                          :                 ..::=::::%---=#+====--@@@%#@@--%-==-===-=-:-#=-=-=+  :.                       
                                                                       ..:.:..:::..:----=##===@%#@%#%@@  ::-:-==-:##%=+::=======:                         
                                        =                                   ::.:::*=:.-:@-:-=---=-:.#@@@:   .%@@@@+--=====.:.--.::.                       
                                                                           :.:::-:-+-+---  :- .--. .:##@@@*%@     .:::: ::                                
                                                                             . :: :    :  :. .        =#@%@@                         =.                   
                                                 ==:                                                   +#@@@    .                                         
                                                                                                      =*%@@                                               
                                                                                                      *%@@@                                               
                                                                                                    =*#%@@%  .    .                                       
                                                                       .. ........................+*+@%@%@@@*...... ..    . . .                           
                                   .            .......................................::-==:==*%#*##@#+++%==*=*****+*+==-::::::::.::: . :................
.................: .. . ......................................................:::-:---=============================+++++++==+=========--:-:...............
................::...:.:..........:..:.:.....................:..........::...........:::::::==========================================:=:=================
...............::=:=:::-::::::::::::.:.:-:::::-:::::::::::::........:........:::::.::..::.:.:::::--=--==-::-========-==:==================================
...............:*+:+:*:=++=:=:=+=::==+-:=+.+=:-:.---::::::::=:::::::::::::::::-::=::::::::::::::::::::::::::::::::====::::==-==:---=====:=================
+++++++++++++++*-+=+=+++++=*:++==+*++++=====+:=:+:-+:::=----:::-::::+:::::-==:=:+::=:+-::=::::::::=-==:::=::-:--:=:.-::::-:+==-=-===+*-===================
++++++++++++++++++:+++=*+++*+*+++*+::++:+++++=+++=++*-=-=++++==-*++-:++=:*+=+=++=+*+++-+=-=-::-=-=+-+-=:=+:*-:-:===+-=-=+*=+=-*+++*+=:+-+=++++++++++++++++
+++++++++++++++++++*+++++*=++++::-*++*++++++++++=+++++++=:++++++++*+++:++++*=+++++*+++*+:++=++==+*=+++++*++*++*++++++=++*=++++*++-++++++++++++++++++++++++
+++++++++++++++++++=++++++++++++:-+++++++++++++=++++++++++++++++**++++++*+++*++++++++++++++++++*+++++++++++++++++++++++++-++++++++++=**+++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
`;

  return (
    <div className="flex flex-col min-h-screenmax-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden w-full">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-mono text-lg opacity-50">
          <pre>{asciiArt}</pre>
        </div>
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="p-8 rounded-lg backdrop-blur-sm bg-black/20 border border-white/10 mt-64">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Smart Docs
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-300">
            Choose a documentation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/docs/smart" className="text-xl font-medium hover:text-teal-400 transition-colors duration-300 mono">
              Smart
            </Link>
            <Link href="/docs/providers" className="text-xl font-medium hover:text-blue-400 transition-colors duration-300 mono">
              Providers
            </Link>
            <Link href="/docs/dev" className="text-xl font-medium hover:text-yellow-400 transition-colors duration-300 mono">
              Dev
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full text-center p-4 text-xs text-neutral-500 flex flex-col items-center">
        <img src="https://us-east-1.tixte.net/uploads/cdn.democraft.fr/logo-title-color-demo.png" alt="DEMOCRAFT's Logo" className="inline pt-6 h-20 w-auto rounded-lg mx-1" />
        © {currentYear} DEMOCRAFT STUDIOS ~ All Rights Reserved
      </footer>
    </div>
  );
}

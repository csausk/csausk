
# Demangle

- for GCC / ELF. [Itanium C++ ABI’s name mangling rules](https://itanium-cxx-abi.github.io/cxx-abi/abi.html). 
  - `extern "C"` & `abi::__cxa_demangle`
  - [Chapter 28. Demangling](https://gcc.gnu.org/onlinedocs/libstdc++/manual/ext_demangling.html)
  - [GCC and MSVC C++ Demangler](http://demangler.com)

- demangler for g++ V3 ABI. see [cp-demangle.c](https://opensource.apple.com/source/gcc/gcc-5482/libiberty/cp-demangle.c.auto.html). 

- [rust-symbol-name-mangling-v0](https://rust-lang.github.io/rfcs/2603-rust-symbol-name-mangling-v0.html)
  - `#[no_mangle]`
  

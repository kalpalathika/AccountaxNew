

export const Button = ({children, onClick, className, isLoading = false, ...props}) => {
    return (
      <button
        type="submit"
        class={` inline-flex justify-center shadow-sm cursor-pointer font-medium border text-white bg-red-500 border-transparent hover:opacity-70 px-4 py-2 text-sm rounded-md items-center ${className}`}
        onClick={onClick}
        {...props}
      >
        {isLoading ? 
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
             <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : null}
            {children}
      </button>
    );
  };
  
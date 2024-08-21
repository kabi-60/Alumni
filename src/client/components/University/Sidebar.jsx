import { House } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
<div className="flex  h-[867px]  items-center p-3 w-[130px] bg-transparent">
	<div className="space-y-3">

	
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-5 ml-5 text-sm">
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#505050] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-house text-white text-2xl "></i>
						
					</a>
				</li>
                <li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#1E1E1E] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-circle-info text-white text-2xl"></i>
						
					</a>
				</li>

                <li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#1E1E1E] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-user text-white text-2xl"></i>
						
					</a>
				</li>
                <li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#1E1E1E] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-indian-rupee-sign text-white text-2xl"></i>
						
					</a>
				</li>
                <li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#1E1E1E] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-gear  text-white text-2xl"></i>
						
					</a>
				</li>
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="bg-[#1E1E1E] rounded-full flex items-center p-3 px-5   ">
                    <i class="fa-solid fa-comments  text-white text-2xl"></i>
						
					</a>
				</li>
			
			</ul>
		</div>
	</div>
	
</div>
  )
}

export default Sidebar

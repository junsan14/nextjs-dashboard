import Image from 'next/image';

export default function Page(){
	return(
		<div className="content">
			<div className="icon">
				<Image
		            src="/hero-desktop.png"
		            width={500}
		            height={760}
		            className="hidden md:block"
		            alt="Screenshots of the dashboard project showing desktop version"
		          />
		          <Image
		            src="/hero-mobile.png"
		            width={280}
		            height={310}
		            className="block md:hidden"
		            alt="Screenshot of the dashboard project showing mobile version"
		          />
			</div>
			<div className="desc">
				<ul>
					<li>A sidebar with navigation links to different sections:</li>
					<li>The sidebar adjusts based on screen size (collapses for smaller screens).</li>
					<li>
						<ul>
							<li>
								Home: The main dashboard view
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		)
}
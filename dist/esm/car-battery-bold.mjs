export const name="car-battery-bold";
export const id="dl_3c6fee3d6e11445bb382";
export const url=new URL("../icons/car-battery-bold.svg?v=a475bb886718ff670e0619d76b3726c252dab1b2fe53be3a8bd7aa5fe92f9c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

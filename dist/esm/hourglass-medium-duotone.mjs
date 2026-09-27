export const name="hourglass-medium-duotone";
export const id="dl_3987bed1d2164e709415";
export const url=new URL("../icons/hourglass-medium-duotone.svg?v=4c28930ef59be30d582fe0780b802060f583c1a454f6c529f87c4c95fc791e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

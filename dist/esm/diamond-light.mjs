export const name="diamond-light";
export const id="dl_e93ed70d283544419939";
export const url=new URL("../icons/diamond-light.svg?v=d7d592bc39abf7c0161ecb0545ab9cbbcadd38f569c8c6ebc0070263e081b48f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

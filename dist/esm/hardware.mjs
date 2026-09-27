export const name="hardware";
export const id="dl_5a8039c07dda9230bdc4";
export const url=new URL("../icons/hardware.svg?v=9440d4b4c752c0c77983d0bb1d5329781dcbb84b62dbee356457a2ae72d1e22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-arrow-right-from-line";
export const id="dl_ecd05a2706f54968aa92";
export const url=new URL("../icons/lucid_1-arrow-right-from-line.svg?v=2d111fca3d2778c76b33ac8a4cbfac112fb551ca6ab6894d521532c00d327860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

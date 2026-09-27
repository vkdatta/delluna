export const name="chair_fireplace-fill";
export const id="dl_57258b0e862b614dfb74";
export const url=new URL("../icons/chair_fireplace-fill.svg?v=1767398da1d3f55888a16a49f9e070b94a999ca033df39b7325aeea70f1fc2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

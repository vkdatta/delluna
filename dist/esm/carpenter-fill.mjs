export const name="carpenter-fill";
export const id="dl_045436f565c177f5ed34";
export const url=new URL("../icons/carpenter-fill.svg?v=ed1d4c9501c68e30b6b74b39841b7c2d9b99b4a5d554a7f4846dda5d6c3b11d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

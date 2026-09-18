export const name="sports_martial_arts-fill";
export const id="dl_af73441193714db0aeab";
export const url=new URL("../icons/sports_martial_arts-fill.svg?v=f84f7f44de5b299534d149e6a02810d6e1d85de54d6d6ebc9b0ff10154ae1ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

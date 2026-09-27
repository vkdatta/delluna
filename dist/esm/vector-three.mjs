export const name="vector-three";
export const id="dl_80d17a081d10d42dbbc6";
export const url=new URL("../icons/vector-three.svg?v=f7ef6532fbffd02599dfc8e02c7464ff3625794d1448c411420a47cfb7030ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

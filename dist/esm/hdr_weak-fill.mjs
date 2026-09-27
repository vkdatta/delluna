export const name="hdr_weak-fill";
export const id="dl_d1a74814f1e897ff4356";
export const url=new URL("../icons/hdr_weak-fill.svg?v=c4342c28339322eac6eb66535f3acd483764a2f69833b32a29d349822b548db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

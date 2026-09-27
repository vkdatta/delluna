export const name="network_locked";
export const id="dl_7c4789897df41c5b17c2";
export const url=new URL("../icons/network_locked.svg?v=11c6d0d71bf748359d353b7235a1c4d3d1d689f87b410818344b51450df39191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

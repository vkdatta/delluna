export const name="crib-fill";
export const id="dl_ac3d832d6a2a46f19d42";
export const url=new URL("../icons/C/crib-fill.svg?v=99a21ae102e3b2fe10c469e421b5118fd4098dbddea04f52e54d1a8b38a62b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

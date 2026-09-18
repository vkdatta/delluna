export const name="crop_portrait-fill";
export const id="dl_feaa2fb538c64de99a16";
export const url=new URL("../icons/crop_portrait-fill.svg?v=40a22b77c4014e986333e87017e25b76ef6143ac64852c0b33af3709e6a11f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

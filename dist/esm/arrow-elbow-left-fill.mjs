export const name="arrow-elbow-left-fill";
export const id="dl_8d290a6fb8ac4d539423";
export const url=new URL("../icons/arrow-elbow-left-fill.svg?v=38cf0bfb9aa7695a6f319579f169dce69afc512b2160260149960480fcc31124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

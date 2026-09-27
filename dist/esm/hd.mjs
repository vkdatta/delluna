export const name="hd";
export const id="dl_dacdf0718eedb6f32582";
export const url=new URL("../icons/hd.svg?v=a041b7110903a8307168be1b94a9b5833561635419867d4016dff036d6fa40ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

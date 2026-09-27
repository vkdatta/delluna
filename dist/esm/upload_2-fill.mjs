export const name="upload_2-fill";
export const id="dl_dfde363f66144857e71b";
export const url=new URL("../icons/upload_2-fill.svg?v=9bc701e8e29e00d52634f87933bafffeddccd17e2b95538e1ec1ae2db3690c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

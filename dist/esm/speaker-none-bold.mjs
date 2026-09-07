export const name="speaker-none-bold";
export const id="dl_ec9e599d2c144a88bc5b";
export const url=new URL("../icons/S/speaker-none-bold.svg?v=c3796ed2b02ffdb34d9aedcc0d8b402ecb93249715823af71dcfb8b57a5051a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

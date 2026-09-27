export const name="police-car-duotone";
export const id="dl_a386123b5105470ba2a4";
export const url=new URL("../icons/police-car-duotone.svg?v=4bbacd343c3ad2859fc478af345204e8a28dff0067513de456fd672475248a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

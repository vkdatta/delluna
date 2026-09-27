export const name="bed-fill";
export const id="dl_09418dbaf3084688972c";
export const url=new URL("../icons/bed-fill.svg?v=94abc9c556ff04e9541a38b04ba6b95a4f411a240024a6df3b2697f689393ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

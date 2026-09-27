export const name="do_not_disturb_on";
export const id="dl_83f63f5f8c2ef85fa523";
export const url=new URL("../icons/do_not_disturb_on.svg?v=c3f57422dde51ae8766ecb24f2b0523615e3668f8a33c15ee730b77641ff9186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

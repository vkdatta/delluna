export const name="24fps_select";
export const id="dl_8845b00415524eeba56b";
export const url=new URL("../icons/2/24fps_select.svg?v=d99a3377de109a65246e3e7532612fa2f77174a9e7ca844839462c4c8c7042ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

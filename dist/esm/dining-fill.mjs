export const name="dining-fill";
export const id="dl_9eb352a3e888b3b23ef2";
export const url=new URL("../icons/dining-fill.svg?v=761cae46888bcd489b69233408c53f374985f3899651751cd2b0b78d9f4bc4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

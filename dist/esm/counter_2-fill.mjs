export const name="counter_2-fill";
export const id="dl_fef9ab84902359c53dde";
export const url=new URL("../icons/counter_2-fill.svg?v=acaf00aa54bd4c9cae5194efe24e693d040ebe7c0fd9084e6f7eb7b0acfaaa5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="accessibility_new-fill";
export const id="dl_c370940d9aef423cbd70";
export const url=new URL("../icons/A/accessibility_new-fill.svg?v=91b33c5881e72c2c673653325cb0c7efd3620c99e09922f06246aaa85b0ed9ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

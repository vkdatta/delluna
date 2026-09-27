export const name="nature_people-fill";
export const id="dl_d81502a05ee920516b1b";
export const url=new URL("../icons/nature_people-fill.svg?v=b3c17a5db08a4c697b5bcd05ea93d490f526faa74e3b79cc83dbb4feeaba83c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

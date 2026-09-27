export const name="battery-plus";
export const id="dl_3903c03003ad4359b00a";
export const url=new URL("../icons/battery-plus.svg?v=a3895d079c026f1a90119660831d903537b19a1bc1b1070ed6692474e4633fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hotel-fill";
export const id="dl_ebaf334d9757acdd1c09";
export const url=new URL("../icons/hotel-fill.svg?v=644bcb86bfb15d202308909b917ba198f10aa7633f1a924fc857bca7f6edaa5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-circle-nine-fill";
export const id="dl_f09a9643f3e34dafa4e4";
export const url=new URL("../icons/number-circle-nine-fill.svg?v=13aefdb915d65c2c5475aeef8211a4c9fa6f150ce6ed8ba24b00a33db43fed3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

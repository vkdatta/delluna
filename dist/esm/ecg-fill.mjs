export const name="ecg-fill";
export const id="dl_a9de1cbc1f2c8e8f72f6";
export const url=new URL("../icons/ecg-fill.svg?v=f8ae9ea2cb92cde2b14d893dad2f4d1d30e56d12d6c6d81ac3608411c2932236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

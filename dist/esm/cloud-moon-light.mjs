export const name="cloud-moon-light";
export const id="dl_207d42343aa748499551";
export const url=new URL("../icons/cloud-moon-light.svg?v=d698cee30c1d6746ec5ecedfc4179841d1f708696718074d4f9327adc9957602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

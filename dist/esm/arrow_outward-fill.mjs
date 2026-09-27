export const name="arrow_outward-fill";
export const id="dl_a54a2cc6180b2704c35c";
export const url=new URL("../icons/arrow_outward-fill.svg?v=e69f66d049144f9e7f0e7ad1680500dead3515bcb6efb3746faf8f9c92097ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="titlecase-fill";
export const id="dl_93fb32d96d7260b7f9b3";
export const url=new URL("../icons/titlecase-fill.svg?v=10b8ee4c2047be20dfd5bef0178c433cc98aa9fcd094f843040962e05171407b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

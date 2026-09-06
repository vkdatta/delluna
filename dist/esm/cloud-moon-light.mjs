export const name="cloud-moon-light";
export const id="dl_207d42343aa748499551";
export const url=new URL("../icons/cloud-moon-light.svg?v=4161f2b5a7263117e1fabb80e995a932007e65ccdf65de1e1eb3c153acc3aa2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

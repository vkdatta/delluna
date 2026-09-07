export const name="pipe-wrench";
export const id="dl_028b83f0a2404f8fbe96";
export const url=new URL("../icons/pipe-wrench.svg?v=cdb72def79496a627c9260110c6988d7072872f33b32bedbed9e75b56bae5f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

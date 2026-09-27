export const name="lucid_3-maximize";
export const id="dl_023095573a1e4eca8591";
export const url=new URL("../icons/lucid_3-maximize.svg?v=91eb34a7b7546bc3049a279043e3672beb696f87c02ecce1983e073b08763906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

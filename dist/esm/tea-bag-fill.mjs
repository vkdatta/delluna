export const name="tea-bag-fill";
export const id="dl_1fa83ead73f424654a40";
export const url=new URL("../icons/tea-bag-fill.svg?v=155d6aa4a7bf5d4551e600627f2048497589549d0b256700948313d81660017a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="science-fill";
export const id="dl_d36c810ce6ca56167382";
export const url=new URL("../icons/science-fill.svg?v=d0d7a3438e99cd499c2a9d9aabe7f94432de2cac88fdaa968d3e5348f1d675ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

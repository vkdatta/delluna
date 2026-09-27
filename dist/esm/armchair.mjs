export const name="armchair";
export const id="dl_6f8722d5620a4af1b1b0";
export const url=new URL("../icons/armchair.svg?v=ea1cdc87bdf0648dd9b5e4ff8fc81992f32303f06a33a4161cd4e360dcc4d3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

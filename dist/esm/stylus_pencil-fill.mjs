export const name="stylus_pencil-fill";
export const id="dl_4eab9fcc21a49d3ebe3f";
export const url=new URL("../icons/stylus_pencil-fill.svg?v=e5f8454bd597f9d8b37dfc187842c75eb89990b3177be5d16ad4a664519ff13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

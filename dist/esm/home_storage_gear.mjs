export const name="home_storage_gear";
export const id="dl_600f29493e3ea3688b6b";
export const url=new URL("../icons/home_storage_gear.svg?v=931c9f0ee73d6e344bf813189fb28016ac19d1ea6ae76d053e6aa0f99c18c8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

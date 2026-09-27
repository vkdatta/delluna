export const name="power-fill";
export const id="dl_1f33a422e6d6461583c4";
export const url=new URL("../icons/power-fill.svg?v=0c351e441948d33728852154d32420adfe9fc5b055e8809e208c5e354019001a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

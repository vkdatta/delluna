export const name="cat-fill";
export const id="dl_00fa6cb7d3ff4be48447";
export const url=new URL("../icons/cat-fill.svg?v=8edc64cb9929604df28625f8dd972a698c6b815a79d2d03760629d385ddc2a5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="nest_sunblock-fill";
export const id="dl_2f213e4c3c4f779d3ad0";
export const url=new URL("../icons/nest_sunblock-fill.svg?v=3552257cfd9c7d90ccac5162cfe31e172b6c2f38cb339fe1d50c1821169b13e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

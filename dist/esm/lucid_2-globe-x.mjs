export const name="lucid_2-globe-x";
export const id="dl_72637c085cc64601b759";
export const url=new URL("../icons/lucid_2-globe-x.svg?v=8512d36a39fc669921c8b1e219fe6c6a56280650922fa738cee350fc66aff26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

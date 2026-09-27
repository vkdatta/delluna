export const name="open_in_new_down-fill";
export const id="dl_697d3ee53ca02f38ae2f";
export const url=new URL("../icons/open_in_new_down-fill.svg?v=580b2d550bae2f09fa6123d0411876ba362e9e0d9bb30719903b481c10454f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

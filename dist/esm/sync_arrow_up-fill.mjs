export const name="sync_arrow_up-fill";
export const id="dl_16c023bb1d627b0c44f4";
export const url=new URL("../icons/sync_arrow_up-fill.svg?v=9615b939131d112b1d036a0791a2b368c53cdd43a38b9d8e23766bc74cfb2b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

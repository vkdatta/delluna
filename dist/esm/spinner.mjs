export const name="spinner";
export const id="dl_b20793427f544e9eb4ac";
export const url=new URL("../icons/S/spinner.svg?v=674fba5458e026a27c08ad6e462556e1c4db1a1b6e393509dc6b19036f910d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

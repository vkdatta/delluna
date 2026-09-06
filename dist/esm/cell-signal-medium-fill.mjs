export const name="cell-signal-medium-fill";
export const id="dl_86938aed5842463eb843";
export const url=new URL("../icons/cell-signal-medium-fill.svg?v=31fd8ff0f0753d4489f65f3db0753b255b4be0bcf1efa88faec9d07f90fab133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

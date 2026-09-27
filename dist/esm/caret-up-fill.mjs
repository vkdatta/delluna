export const name="caret-up-fill";
export const id="dl_e339885099c24b7c930b";
export const url=new URL("../icons/caret-up-fill.svg?v=982f9fd6643efa81a4a1d57c680d4229c72ce0de37e57cc71c7715afce4908fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

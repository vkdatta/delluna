export const name="shift-fill";
export const id="dl_593d74a2173d133f57ee";
export const url=new URL("../icons/shift-fill.svg?v=ed7f672c996693cd4cb5c3aee5349483a4580933f6227b1d54d253bf08abd686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="north_west-fill";
export const id="dl_2df2430a5e3fa7b4ad09";
export const url=new URL("../icons/north_west-fill.svg?v=eb4b34fedd0d19b2e5d4f041e52b506dae9368553fb39ca3d22df149c4b5209b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

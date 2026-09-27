export const name="looks_4-fill";
export const id="dl_20f9ace1d4fab8d43e5e";
export const url=new URL("../icons/looks_4-fill.svg?v=d2e4dccbe3cae05099b50dd6dbc251469999e66c16d0840a9b2300ee32b387d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

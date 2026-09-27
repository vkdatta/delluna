export const name="stacked_email-fill";
export const id="dl_f530dfe4f15a1d191078";
export const url=new URL("../icons/stacked_email-fill.svg?v=0ad461c9a82940384e1c848b33a6327b4ebd0dcbd2563208a4b5162d9cd8219b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

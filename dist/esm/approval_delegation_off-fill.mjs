export const name="approval_delegation_off-fill";
export const id="dl_b101bcb7ca2dedffe992";
export const url=new URL("../icons/approval_delegation_off-fill.svg?v=9a554881c033190c0655edc26bca27ccb21b67d493d2e94a7b08725d4ab4e157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

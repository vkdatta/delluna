export const name="fingerprint_off-fill";
export const id="dl_3960cc7bbe642d8d064d";
export const url=new URL("../icons/fingerprint_off-fill.svg?v=8e240464f34e7a8f7f8389ad40c83286ff0d1d74a45b7dbe478629b35f13a7b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

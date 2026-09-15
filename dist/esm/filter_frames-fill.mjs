export const name="filter_frames-fill";
export const id="dl_c2677882246240fa905b";
export const url=new URL("../icons/F/filter_frames-fill.svg?v=825ae88f1bf3e856acd5bbefe9cb0bd8493cf65cbae3b1a776ed65ead8db7533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

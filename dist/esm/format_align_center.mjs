export const name="format_align_center";
export const id="dl_e2977af388f4617660dd";
export const url=new URL("../icons/format_align_center.svg?v=6a2fec513e160a025d0d87cdc2ddacb3656d59f0503ebb42c69824eda9cdb1e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

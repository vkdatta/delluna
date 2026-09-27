export const name="ad_group_off";
export const id="dl_1eda04e32021d4ed644f";
export const url=new URL("../icons/ad_group_off.svg?v=0207f8ea113224b966dbdbabd09f898dd3e53c72ef037cde6dd8c7ed16317b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

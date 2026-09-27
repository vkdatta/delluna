export const name="blinds_2_closed";
export const id="dl_ea35860cb534477d0697";
export const url=new URL("../icons/blinds_2_closed.svg?v=695ed1d92237a586a7c9a041021ce14fa258505c2540f7163a2f3b9cb8189c86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

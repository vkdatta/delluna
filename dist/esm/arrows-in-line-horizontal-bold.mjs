export const name="arrows-in-line-horizontal-bold";
export const id="dl_e295e5518c0d4821a887";
export const url=new URL("../icons/arrows-in-line-horizontal-bold.svg?v=1c1d73034df47918616fba19a85f6601a3725eef3e91617fd54938f9dc4e044d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

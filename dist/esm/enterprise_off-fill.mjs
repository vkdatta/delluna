export const name="enterprise_off-fill";
export const id="dl_0f4b691db23ab1d98ef0";
export const url=new URL("../icons/enterprise_off-fill.svg?v=5670980325e672340fb4cc021224405aac189cf474152b9ae62276f69392fadc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

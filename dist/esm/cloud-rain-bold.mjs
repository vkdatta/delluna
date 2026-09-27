export const name="cloud-rain-bold";
export const id="dl_642f46b2e531464496fb";
export const url=new URL("../icons/cloud-rain-bold.svg?v=a5e026d4575239884ac9aced308eb9f41c83c4d7b69d4a1d23124de3fc9fd74a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="real_estate_agent-fill";
export const id="dl_81015fcc2a046adcbdf4";
export const url=new URL("../icons/real_estate_agent-fill.svg?v=a8dcf79bfa99daaeb74d4fcd50ff4ad2394e30ae528abb872581d2a4c15cab1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

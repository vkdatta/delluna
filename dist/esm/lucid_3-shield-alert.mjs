export const name="lucid_3-shield-alert";
export const id="dl_727acaccf92e4ad19909";
export const url=new URL("../icons/lucid_3-shield-alert.svg?v=11bcfd08e0ebdd974d111a839a461c7776737511b6a0100dcb8bc1fa7f60a794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

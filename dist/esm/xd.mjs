export const name="xd";
export const id="dl_8a44abc457755831a97b";
export const url=new URL("../icons/xd.svg?v=1007119e8cae19983d7a57465ae0efc1b82f64f02bb4b89b001b211b6d5664f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="tibia-fill";
export const id="dl_4dc2dc54ce3ee9278708";
export const url=new URL("../icons/tibia-fill.svg?v=df2f63965b1ca3ecaa2f27b8ec2c09bd19dcdf4a3221f34a269e88ea79f356dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

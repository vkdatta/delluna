export const name="baseball-thin";
export const id="dl_0ed3998b6f2d4418b2aa";
export const url=new URL("../icons/baseball-thin.svg?v=ff14aa6c58ec2bdb3b99cbc9b1bc8913c190b1cc7d8b556a8fa0668b4db9407f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

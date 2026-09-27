export const name="ticket-slash";
export const id="dl_84fccd5eb9b24ec2ac98";
export const url=new URL("../icons/ticket-slash.svg?v=0259c020040a31cb99d7468f55e792b4277fcea65a4fedf2c59c5dbcda155522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

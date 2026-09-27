export const name="ticket-minus";
export const id="dl_318fd31645f0491187f8";
export const url=new URL("../icons/ticket-minus.svg?v=3b78c2228f24fa26cddcf3cf2c213d01095f5a2d863e447fe805a9523eefc5f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

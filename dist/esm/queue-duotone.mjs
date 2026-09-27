export const name="queue-duotone";
export const id="dl_0dd4d70765574a0fb9de";
export const url=new URL("../icons/queue-duotone.svg?v=ea38caf605d996e8e6c825a2ae364b0c8492c8f1b5db08322a57130cc1db4787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

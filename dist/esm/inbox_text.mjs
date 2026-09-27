export const name="inbox_text";
export const id="dl_ec2a361ec6254d177079";
export const url=new URL("../icons/inbox_text.svg?v=92a3b5c3fec644bddfe973824c90ff0b08d428bb83cf7b2e2b16b962ae93d7b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

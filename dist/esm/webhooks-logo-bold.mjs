export const name="webhooks-logo-bold";
export const id="dl_cb411696aae16b5167ab";
export const url=new URL("../icons/webhooks-logo-bold.svg?v=9ae1ba46bfd514ee42e555923f681984364642306b646baaab4fbee96418a507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

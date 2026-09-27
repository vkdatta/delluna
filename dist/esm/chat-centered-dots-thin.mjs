export const name="chat-centered-dots-thin";
export const id="dl_43cc1c05794644eb911c";
export const url=new URL("../icons/chat-centered-dots-thin.svg?v=7645e81253ab1683141cfefc589b30f695ea37596db0d901b1b5d53138177674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

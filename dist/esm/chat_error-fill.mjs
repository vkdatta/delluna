export const name="chat_error-fill";
export const id="dl_9a60899ebcfe2207d504";
export const url=new URL("../icons/chat_error-fill.svg?v=c2f60182049dca112cec1e85ad898cda436da3667fab20666c3604854f175353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

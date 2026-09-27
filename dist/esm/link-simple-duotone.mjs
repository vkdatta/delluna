export const name="link-simple-duotone";
export const id="dl_eb5f8d3829254cc680fb";
export const url=new URL("../icons/link-simple-duotone.svg?v=706774bcc55a408a2baf83b176159f186fe73a4a5e5daf74b19fddc464de5f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

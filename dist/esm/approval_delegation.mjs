export const name="approval_delegation";
export const id="dl_3946d05fa7b98d65f837";
export const url=new URL("../icons/approval_delegation.svg?v=64b8882efe34ba8300dad3299b359a29c22c0ff10ddf9f9658db8554bc61e108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

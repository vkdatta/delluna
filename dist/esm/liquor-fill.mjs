export const name="liquor-fill";
export const id="dl_fa0bc7524e647152dc65";
export const url=new URL("../icons/liquor-fill.svg?v=41e9036276ddb1064b3765722f6e1fc7794cc86b1dcf37c9eea21a784eef808b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

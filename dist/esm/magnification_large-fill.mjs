export const name="magnification_large-fill";
export const id="dl_a2f9bb3afa0eaef4c888";
export const url=new URL("../icons/magnification_large-fill.svg?v=b71ffdeea226046a1335e8b473c5714c443bcd4f97e4c7ec2ba756aee8815fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

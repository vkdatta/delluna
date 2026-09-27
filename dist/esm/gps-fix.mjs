export const name="gps-fix";
export const id="dl_f8a6121f5e074244ae1c";
export const url=new URL("../icons/gps-fix.svg?v=9f2ba68559f1121877132aa965dfb224531e04a91eedcbcb5f21eecd4d48b551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

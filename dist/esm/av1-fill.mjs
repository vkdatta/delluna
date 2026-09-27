export const name="av1-fill";
export const id="dl_3f82ec2f64d427b35005";
export const url=new URL("../icons/av1-fill.svg?v=ee6c572f244a6cc7d2849ec8e512534f1c7cacc7ed561685c3afa3b28bd3b9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

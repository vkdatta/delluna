export const name="heart_broken";
export const id="dl_9b486a5d256377e9970e";
export const url=new URL("../icons/heart_broken.svg?v=2cdfffc2291278204fd05271dd86022439fcc0f69e40a6e1ec2e0756eb630c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

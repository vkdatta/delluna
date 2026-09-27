export const name="lucid_3-shield-check";
export const id="dl_f2ec4fad1dab4c29b473";
export const url=new URL("../icons/lucid_3-shield-check.svg?v=75162ab7db3f687f7845d67b7c0cb1f090f793a4ef0d1ec2e5add5e0209b1e6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-phi";
export const id="dl_07f93d1ec2cf4922a2c9";
export const url=new URL("../icons/lucid_3-phi.svg?v=f7ec44d222655a45c72aaecc36452f8dc2ec31face5ffe560526ef7318944f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

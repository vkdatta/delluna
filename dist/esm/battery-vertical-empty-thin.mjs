export const name="battery-vertical-empty-thin";
export const id="dl_3bfd39bf1f9a48119865";
export const url=new URL("../icons/battery-vertical-empty-thin.svg?v=ec86b8f2a2e073699800c8e4eec14bec10150bd3c5ea26ad4484d4d38b55ec2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

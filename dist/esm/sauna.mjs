export const name="sauna";
export const id="dl_9599b1fab65247dea703";
export const url=new URL("../icons/sauna.svg?v=8e6d7d3828fe2e7a3149ec2e92ce1564899e6ee92ad73e0ed34fffd7cb4faa72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mail_shield-fill";
export const id="dl_a9a7e4b5703d6df20b9e";
export const url=new URL("../icons/mail_shield-fill.svg?v=1b8eec329d7e506ec2cbb2140866e9c75c16e134ccd98f15ebd3b980ba5aca42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dress-light";
export const id="dl_9884db232f2b4dd0b63c";
export const url=new URL("../icons/dress-light.svg?v=7d2aa7ccfd04f63206e5cb3cc23ef6e75b6499342008c65ec2eb08dfcbe1bc3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

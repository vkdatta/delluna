export const name="phone-disconnect-bold";
export const id="dl_d664306f79524a698f2b";
export const url=new URL("../icons/phone-disconnect-bold.svg?v=8b7f825179798245765f946fce30b8a4d6e11d7dda29bd5ac1ec2e9f5461a030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

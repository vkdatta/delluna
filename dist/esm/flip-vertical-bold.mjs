export const name="flip-vertical-bold";
export const id="dl_d6e878cc66dd44f9ac28";
export const url=new URL("../icons/flip-vertical-bold.svg?v=88c0e77246792ed03b654dd4a58c442456f37ea61b508233d12469658c0fa0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

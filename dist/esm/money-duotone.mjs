export const name="money-duotone";
export const id="dl_8502c2a9c9834286a720";
export const url=new URL("../icons/money-duotone.svg?v=4cf293632438f3e67c15e57181c9fb2ec2ad4f7d16d4e23e3fe8ef9f3af7dbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

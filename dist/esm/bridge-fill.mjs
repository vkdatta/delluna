export const name="bridge-fill";
export const id="dl_3cd9bccf651645efa548";
export const url=new URL("../icons/bridge-fill.svg?v=42f4e2f7295c477b771cf6b80af9cb15fd4d8f66eda5c5284079a09a6ef213fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

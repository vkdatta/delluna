export const name="user-circle-gear";
export const id="dl_a92a02d8d7c369681c2d";
export const url=new URL("../icons/user-circle-gear.svg?v=e9a9d33c3974e94709c69bbc10630e5cea1658df325e1fc208e0f5e1b1fa0d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

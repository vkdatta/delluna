export const name="user-round-plus";
export const id="dl_97c231521be44b3d80b9";
export const url=new URL("../icons/user-round-plus.svg?v=1a09a49903651453c7d69107afd08fbab69c784369bf05497ff23c2443123038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

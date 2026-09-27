export const name="user-circle-gear-fill";
export const id="dl_7d3c8c7c3a38569d6a32";
export const url=new URL("../icons/user-circle-gear-fill.svg?v=e05b96146f9ac1233203e1758f34845eea7ffebf4f2dbd527bf805f9e675353b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

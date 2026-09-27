export const name="user-square";
export const id="dl_0f3cbbdfac6e9f36c660";
export const url=new URL("../icons/user-square.svg?v=286a2d47f60a1e913751b103f252c9348f6830118fe7f3dec7b191bd693e4df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

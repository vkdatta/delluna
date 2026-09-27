export const name="person-arms-spread";
export const id="dl_286a2e2a394f4a86aa0b";
export const url=new URL("../icons/person-arms-spread.svg?v=ef0dbab4078d857d9a1a368b835b25d123222234fe22af6af1ba576fcb4f4881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

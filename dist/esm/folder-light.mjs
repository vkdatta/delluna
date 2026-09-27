export const name="folder-light";
export const id="dl_8fec3c7e89a1430ca4cf";
export const url=new URL("../icons/folder-light.svg?v=fabe8a67deee475706f8fb0bc65ef51688cfd2f29e784ad47b6ddeb6c77071d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="scissors-fill";
export const id="dl_c422b729e9af7b165c9d";
export const url=new URL("../icons/scissors-fill.svg?v=d5173ddb0e2251244fd4a829bba7316ba23e318a3e4f6b3ca0ecd44450b2a84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

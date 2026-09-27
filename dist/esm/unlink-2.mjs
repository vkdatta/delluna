export const name="unlink-2";
export const id="dl_ea682da779fc48fd9d6a";
export const url=new URL("../icons/unlink-2.svg?v=42500d4b591a951fdcc9fc76851d8001f84113f2d83673a7f993178a47d38e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

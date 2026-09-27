export const name="orbit-fill";
export const id="dl_abc5b64015db71e7e33c";
export const url=new URL("../icons/orbit-fill.svg?v=8faac3e82cc0fdedd2db48575a6a6d3d5b0baef4a40cb0b7062f8637514c3e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

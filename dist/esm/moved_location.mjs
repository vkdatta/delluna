export const name="moved_location";
export const id="dl_22e2fb5beb464334b71a";
export const url=new URL("../icons/M/moved_location.svg?v=bfe6398299d4f374c11f6a3728a9b08f1ea4fb63e0ae0e3faa5039ceaf8eb2a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

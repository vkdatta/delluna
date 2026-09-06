export const name="folder-simple-lock-bold";
export const id="dl_9b4a205da42a450e9f3c";
export const url=new URL("../icons/folder-simple-lock-bold.svg?v=9d9e29c723509f88f9755589026d80893a1344f7940d6159d733001ad0924235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

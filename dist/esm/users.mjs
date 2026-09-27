export const name="users";
export const id="dl_1de5f4f3b209309abc83";
export const url=new URL("../icons/users.svg?v=e5bf63d7b2cdf429185e34481f5f6dbae97322993b707ec4c0b2310f9656efb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user-circle-dashed-duotone";
export const id="dl_227595966b5035e605fb";
export const url=new URL("../icons/user-circle-dashed-duotone.svg?v=f89145eab9634696da64d72854e60eb37c98cb8c94d371831ffda563a68a58dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="square-terminal";
export const id="dl_c41b627bbe03414580a0";
export const url=new URL("../icons/square-terminal.svg?v=569772c14372d636c2baf316f1343eaa7f91718f90757df1c947678959b78f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

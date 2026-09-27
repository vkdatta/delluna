export const name="megaphone-bold";
export const id="dl_61d93709300043718f7f";
export const url=new URL("../icons/megaphone-bold.svg?v=c01acff1343bb14325433c824a9a710d8ff27c71e83740bc0a7619ea02036da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

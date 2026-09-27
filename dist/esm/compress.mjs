export const name="compress";
export const id="dl_977c81ad0d2fac30d709";
export const url=new URL("../icons/compress.svg?v=99c8c05aa1e8e6d3a72216030fd84fbab8c178f23bc595fcb616bc583039c19d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ruler";
export const id="dl_fe9b218c386d49f0b1f3";
export const url=new URL("../icons/ruler.svg?v=d5c2daa0fb4924bf0bf1b7d950c4b781a9dd7dd4713c9e94d0c38e6ce5c5ad23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

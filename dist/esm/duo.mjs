export const name="duo";
export const id="dl_1478ef3ed749c74a488a";
export const url=new URL("../icons/duo.svg?v=3c6025be9beef7852dc44deef532e1438d5273872eaf84f4ad3c888f2b80627d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

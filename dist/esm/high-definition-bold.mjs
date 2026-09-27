export const name="high-definition-bold";
export const id="dl_4f3ae9328a024202aab2";
export const url=new URL("../icons/high-definition-bold.svg?v=8e0c4bde9cd4bacc922d32c65724d35a21a88b05053c221497845ed50778b137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

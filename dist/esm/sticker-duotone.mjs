export const name="sticker-duotone";
export const id="dl_c973174957833489d074";
export const url=new URL("../icons/sticker-duotone.svg?v=9c36fc876565cd5c775d0c9495c52027aaf358908458024738367877715c2b2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

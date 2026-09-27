export const name="lucid_1-chess-knight";
export const id="dl_f221f5322643448898d6";
export const url=new URL("../icons/lucid_1-chess-knight.svg?v=009f561f42e538dc0a470345744089790b3da0f75b91774d4e7b3b0223e6d068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-chess-knight";
export const id="dl_f221f5322643448898d6";
export const url=new URL("../icons/lucid_1-chess-knight.svg?v=95c6c783d9c732b9a4d973cf24697438a1011d29143e7a17e8c07ef90b166ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

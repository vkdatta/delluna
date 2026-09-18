export const name="vacuum_2_on";
export const id="dl_8c8cbb18605c4de2ac4a";
export const url=new URL("../icons/vacuum_2_on.svg?v=296a8b7b08a4a8dbecb82662f3182afa7f1d7a44f7fdfefaf8d078275eee3cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

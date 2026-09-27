export const name="chair_alt-fill";
export const id="dl_1c0f1b8a7dc05ea2ff30";
export const url=new URL("../icons/chair_alt-fill.svg?v=2594c69300f04356932d6c5e0ade2d073c24cb574900bfa2f8dff0993856d7f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

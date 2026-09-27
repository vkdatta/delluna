export const name="folder_limited-fill";
export const id="dl_771837330451ba0362ae";
export const url=new URL("../icons/folder_limited-fill.svg?v=e73b1a7e179ea0cf94d25413fe04dd021e3c7d68551c58f59437078d99f13c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

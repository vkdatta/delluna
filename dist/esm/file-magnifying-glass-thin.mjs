export const name="file-magnifying-glass-thin";
export const id="dl_4e7e377086a7496fb9f1";
export const url=new URL("../icons/file-magnifying-glass-thin.svg?v=408e8b4150acf9fb267499d1e1d5e7bcee2627e02b7f97ed1989eb0a7c829778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

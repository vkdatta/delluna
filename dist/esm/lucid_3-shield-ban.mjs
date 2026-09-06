export const name="lucid_3-shield-ban";
export const id="dl_185d954e3cd546af8803";
export const url=new URL("../icons/lucid_3-shield-ban.svg?v=117481ceaa9cc7d11af3fdffd72c63af8001ca14e580a012ad727afad2e28cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

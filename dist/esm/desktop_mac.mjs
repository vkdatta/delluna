export const name="desktop_mac";
export const id="dl_cfa98ea7859fe47ef2e2";
export const url=new URL("../icons/desktop_mac.svg?v=c91093b50a14323d03757404745f0fa0a3aa12ef78512e17c4a502eeb5709d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="desktop_mac";
export const id="dl_6234ba6882d6475fbccf";
export const url=new URL("../icons/desktop_mac.svg?v=24ed97c8365f92468d641a52e7473fae88b1e69dd00fa018ff2154c74c963d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

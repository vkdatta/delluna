export const name="background_replace-fill";
export const id="dl_49d6425d59c439be2e66";
export const url=new URL("../icons/background_replace-fill.svg?v=f0431992c8f1f0311cb597cea005508af5fa494ae6597f61556a941c826c847a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

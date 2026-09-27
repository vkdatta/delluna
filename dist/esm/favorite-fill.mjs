export const name="favorite-fill";
export const id="dl_a910f6c7fa500ca02fef";
export const url=new URL("../icons/favorite-fill.svg?v=d1bf05b6637173279c1a12b7656be6764da54a575b37778c757f12ce55dfff03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

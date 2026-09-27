export const name="manga";
export const id="dl_3500f118a6196dc0f9dd";
export const url=new URL("../icons/manga.svg?v=a477d59f07a2b9d40be669d1fc8c0fa395fbd294ea9197a86742b99ee9aa3d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

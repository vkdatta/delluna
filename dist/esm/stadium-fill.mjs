export const name="stadium-fill";
export const id="dl_6b6c60bf517955dc0f99";
export const url=new URL("../icons/stadium-fill.svg?v=3876445ff70eac5ccd79563a09d467ec31d4802172ffa689e9a7b9e4fc95ab7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

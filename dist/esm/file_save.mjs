export const name="file_save";
export const id="dl_a1e26f3a538d4fceb59d";
export const url=new URL("../icons/file_save.svg?v=9a2b1e35df2334307423797ee550093e57d43428ba7894b6bf7415571850d07f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

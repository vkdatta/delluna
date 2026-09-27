export const name="takeout_dining";
export const id="dl_7f411515446f4ffad943";
export const url=new URL("../icons/takeout_dining.svg?v=7f9d1f17738d4655933dcd4a7460d670cb06bb064cf178b0f7185605c3ffb7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

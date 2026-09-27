export const name="heart_check-fill";
export const id="dl_a7047a791acf3edf4cc1";
export const url=new URL("../icons/heart_check-fill.svg?v=b32c9e946498c201cc4fd6c749c6c3c17e00357a5a20b6996129097192ba90b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

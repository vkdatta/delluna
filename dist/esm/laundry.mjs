export const name="laundry";
export const id="dl_97d4b767caee3dc0db48";
export const url=new URL("../icons/laundry.svg?v=50189f7d89fcf6475e1bd728a321e34f7bd9a41922c979b9b41079945934d8f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

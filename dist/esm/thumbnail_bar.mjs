export const name="thumbnail_bar";
export const id="dl_92851dfe90e1415db93a";
export const url=new URL("../icons/thumbnail_bar.svg?v=205ffdd537596ff847fb35ce23f07f0d5ce7956fa35902c4d1ae12691f5f8c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

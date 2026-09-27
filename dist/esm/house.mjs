export const name="house";
export const id="dl_624d964041b4487695cc";
export const url=new URL("../icons/house.svg?v=492220615468956525791aebba164fe9de69535466150e3316080fb0f499ab94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

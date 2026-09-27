export const name="humidity_indoor";
export const id="dl_c5aa101818a66db7ac57";
export const url=new URL("../icons/humidity_indoor.svg?v=3816653d10f9cd8db102a855334b32ccc2f28eb6bec9197b4cd482cec4a039c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

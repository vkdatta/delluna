export const name="hand-arrow-down-light";
export const id="dl_c74e8cdc3e7649a3afee";
export const url=new URL("../icons/hand-arrow-down-light.svg?v=80ca1f5f1243c672141d4d22b3c7eb3cc19b8e0b07a68819d94520b0e98a388c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

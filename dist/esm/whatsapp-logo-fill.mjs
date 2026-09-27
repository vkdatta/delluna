export const name="whatsapp-logo-fill";
export const id="dl_b999f869726c8c7bbeba";
export const url=new URL("../icons/whatsapp-logo-fill.svg?v=31cd85340a41ad7041d00efdc21b7c51e65621612b9fe6633f79d1a843706812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

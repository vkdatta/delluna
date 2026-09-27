export const name="lucid_3-receipt-text";
export const id="dl_c8000d841aff4c41a34d";
export const url=new URL("../icons/lucid_3-receipt-text.svg?v=afb9cea0cebb838c2e4b248fb3811dd62a4229ea51739e4ac758424f81c72d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

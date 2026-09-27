export const name="card_travel-fill";
export const id="dl_cf55075b12255a21a40c";
export const url=new URL("../icons/card_travel-fill.svg?v=84680a1d48046fa2ee1bb1e21256fbae8109683c91ab7cb40e19b7bc2a8d1aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

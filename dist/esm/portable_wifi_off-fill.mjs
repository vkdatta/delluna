export const name="portable_wifi_off-fill";
export const id="dl_b1db134758a02c09ca59";
export const url=new URL("../icons/portable_wifi_off-fill.svg?v=7dd366ddf462d3eb7fd62e82a40e7cb6da3fc60719e292cf5c6b409af7b5e919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

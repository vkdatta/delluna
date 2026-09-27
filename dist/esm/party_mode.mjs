export const name="party_mode";
export const id="dl_b6ebc5624809d6bd6b5f";
export const url=new URL("../icons/party_mode.svg?v=2dd7f8144c4f495384bcf36aa77689a6049f5f105b9d7c327ef32d62442c4d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

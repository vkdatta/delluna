export const name="unlicense";
export const id="dl_fa21ef34e87042fb9c18";
export const url=new URL("../icons/U/unlicense.svg?v=c14d340ecb5355c87a40952ce99a5a1bf296ab77397e28d85030b405ca2f59df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

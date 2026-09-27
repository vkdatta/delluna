export const name="language_us-fill";
export const id="dl_d1c74cd9c8740d5f787b";
export const url=new URL("../icons/language_us-fill.svg?v=c6e0259c770ac5881326ea548862dec02fa8067fd5c8cdb624084387758cfeb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

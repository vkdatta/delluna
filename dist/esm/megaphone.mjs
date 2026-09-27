export const name="megaphone";
export const id="dl_baab3850cabc413b9fa2";
export const url=new URL("../icons/megaphone.svg?v=3fa585bddf0ed11f8e4cfb05e7a86b4446298744b7ba3e5cbaf254cbe7da2932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

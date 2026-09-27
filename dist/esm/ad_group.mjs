export const name="ad_group";
export const id="dl_d66507145e7ef6a7fba4";
export const url=new URL("../icons/ad_group.svg?v=8793520162d6bf044d81f0b7a186762062f8686f665f9904a5f949cfec697891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

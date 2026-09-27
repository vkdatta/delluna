export const name="text_ad_off-fill";
export const id="dl_5d11ecb5761988a480a2";
export const url=new URL("../icons/text_ad_off-fill.svg?v=57d2a96288d0fede656e35a08835c4a2094f18f352293fe066f1cc3cc153d75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

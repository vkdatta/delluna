export const name="contact_phone";
export const id="dl_baf01fc06bbec7f0a94b";
export const url=new URL("../icons/contact_phone.svg?v=ba45245539363826d43758c5704dcb566cba054d834ab94112bc30f9992b7f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

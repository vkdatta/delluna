export const name="language_gb_english-fill";
export const id="dl_c0eabb2e69731b28a259";
export const url=new URL("../icons/language_gb_english-fill.svg?v=2ee6b59937c0a57464ed903ea9b4b5c906b87cb75cf0298b637fba068b8c6aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

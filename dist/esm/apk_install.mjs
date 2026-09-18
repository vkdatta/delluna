export const name="apk_install";
export const id="dl_9bc929970e0a491ba6da";
export const url=new URL("../icons/apk_install.svg?v=a27de27dec11866dcce9bbb14230568d4c72db9e52f95f6af7c46f9e17adc663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

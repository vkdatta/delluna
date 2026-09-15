export const name="encrypted_add-fill";
export const id="dl_5ae250b17fd142758493";
export const url=new URL("../icons/E/encrypted_add-fill.svg?v=d7340ae39664bca48237f1410bd46d396fb635a62ef222a0a81ff53f0139a464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

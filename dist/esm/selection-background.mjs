export const name="selection-background";
export const id="dl_04fd83a94a9940d18b1d";
export const url=new URL("../icons/S/selection-background.svg?v=21ef9593170e14c37d65d5c2add982f3099c4bbd60af7ad107a3c4bebeae3a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

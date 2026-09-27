export const name="add_a_photo";
export const id="dl_39d654f6b871baec218b";
export const url=new URL("../icons/add_a_photo.svg?v=9125b5b3fa744aa748816038d92b1530ee19e4846b484a75ee60ba41e9106244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

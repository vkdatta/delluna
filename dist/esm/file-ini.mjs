export const name="file-ini";
export const id="dl_9474ce6ec30b4b688e66";
export const url=new URL("../icons/file-ini.svg?v=9ba03593102d9523949a280ab63ced4f68ae673974424bd7042074c0b264e877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

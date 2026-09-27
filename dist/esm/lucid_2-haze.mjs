export const name="lucid_2-haze";
export const id="dl_65cae4dd309e4965aa84";
export const url=new URL("../icons/lucid_2-haze.svg?v=e5a08e5a2c29eddd5fa3381f61af26e7bcde5ba8895f3e589eb2e9c61b5c716d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

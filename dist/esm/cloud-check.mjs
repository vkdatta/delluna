export const name="cloud-check";
export const id="dl_9938038ad5c74973a789";
export const url=new URL("../icons/cloud-check.svg?v=6c7bed5d5375b525ac9466e6be659841eec41f35a7b31460b4aacd238338ec9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

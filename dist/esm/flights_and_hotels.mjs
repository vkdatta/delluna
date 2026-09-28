export const name="flights_and_hotels";
export const id="dl_9adfaac5c5b3c8c6015e";
export const url=new URL("../icons/flights_and_hotels.svg?v=ee1f9b07a4bae677355c5e681a06e12cdd3b4d280e33e2067919f0cb23560909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

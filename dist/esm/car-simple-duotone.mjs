export const name="car-simple-duotone";
export const id="dl_7cdf00e4c13340809a18";
export const url=new URL("../icons/car-simple-duotone.svg?v=123afcb53e3310f06a1c21cff79c69928a9f9cea635249c090ccfefa22fcabf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

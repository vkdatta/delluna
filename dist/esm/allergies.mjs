export const name="allergies";
export const id="dl_5a1d50211bdb026e95f7";
export const url=new URL("../icons/allergies.svg?v=ab414d56f53efb4bb20e46dd7eb4d82d390cceec7b4be307e9aefd059122cfbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

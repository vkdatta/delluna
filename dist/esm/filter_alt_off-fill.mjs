export const name="filter_alt_off-fill";
export const id="dl_2ef1e36f051b75881f58";
export const url=new URL("../icons/filter_alt_off-fill.svg?v=7edeefc9ebf6a4136df07f3ef86acc98d5b9a9eb53dab571eb2558436c186256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

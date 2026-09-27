export const name="subset-of-fill";
export const id="dl_1f017f560f0da8eeff5d";
export const url=new URL("../icons/subset-of-fill.svg?v=10f84443f128f076afc147fd80d7b62e61f9826574fe2a6291b5bb43a2fe50f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

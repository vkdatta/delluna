export const name="checks-fill";
export const id="dl_1d31e712ce5d4cc9a72d";
export const url=new URL("../icons/checks-fill.svg?v=18533607c8160a907b4aaf26cb68e604d7818787b1314a789ade73f0a7e7d2e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

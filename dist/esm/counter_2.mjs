export const name="counter_2";
export const id="dl_677387aec28f7bc43383";
export const url=new URL("../icons/counter_2.svg?v=7927ae424d72acefce708c51674046a97d5307c87873df5b770387eddb1bbd96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="clock-countdown-fill";
export const id="dl_23ab867ef725483d9783";
export const url=new URL("../icons/clock-countdown-fill.svg?v=01137ab347bea5c2ff837b47c873aeb2b65fff7c94062e4f37d2bc574ce80940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="timer_10";
export const id="dl_e06f21c982e249a096e9";
export const url=new URL("../icons/timer_10.svg?v=00c2c1ad8f16679b2c8f3762f43944232eb3100709d0140d67da6f266f780042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

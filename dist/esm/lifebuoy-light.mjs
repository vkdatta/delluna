export const name="lifebuoy-light";
export const id="dl_5ce75da68fe242f0b13b";
export const url=new URL("../icons/lifebuoy-light.svg?v=4d31cabd47dcbb76ea03c1ee36393d50d5862391fdacfc491f2d061d057d8a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

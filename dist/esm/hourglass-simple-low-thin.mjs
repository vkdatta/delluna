export const name="hourglass-simple-low-thin";
export const id="dl_fe2dd3278c02464bbca3";
export const url=new URL("../icons/hourglass-simple-low-thin.svg?v=8a64a889c2cf28eb5242fa839226a1483ac5a027335a87e0a8eafc89b52d1296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

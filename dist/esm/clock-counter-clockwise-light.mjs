export const name="clock-counter-clockwise-light";
export const id="dl_4aa29bc20144458499b5";
export const url=new URL("../icons/clock-counter-clockwise-light.svg?v=16dc29425afc8b14ca5920bc67402eea30019b0ae8642da7e61c8e585ddf758e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="clock-counter-clockwise-light";
export const id="dl_4aa29bc20144458499b5";
export const url=new URL("../icons/clock-counter-clockwise-light.svg?v=d51ee7f02973861519df6f2193c815ecaf8a8aec2495e2a4a19576d82c609fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

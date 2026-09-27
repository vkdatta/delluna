export const name="eyeglasses_2_sound";
export const id="dl_b8fae311e87283cdf792";
export const url=new URL("../icons/eyeglasses_2_sound.svg?v=671977be9e6ff2e819af140413bf716df585c477c85073dd58e5eca863d4ca9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

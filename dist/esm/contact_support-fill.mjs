export const name="contact_support-fill";
export const id="dl_c924ad73357fe643ec24";
export const url=new URL("../icons/contact_support-fill.svg?v=d39f3f2d5fdba5458d798ca22aff979523ca78289b894b904239fae2ef38757f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

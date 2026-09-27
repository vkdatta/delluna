export const name="clock-countdown-light";
export const id="dl_5f75231314084fc28139";
export const url=new URL("../icons/clock-countdown-light.svg?v=921eac21baa5918103792eb5585ecc6519c76cdfc8ca6ccab788665618e8fd46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

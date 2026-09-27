export const name="speaker-x-fill";
export const id="dl_356d46899032ef188e14";
export const url=new URL("../icons/speaker-x-fill.svg?v=b0af1f8cec5e0f78899f085c4cd17de771648760f49d113764af710ed4e46024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

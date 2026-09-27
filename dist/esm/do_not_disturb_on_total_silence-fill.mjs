export const name="do_not_disturb_on_total_silence-fill";
export const id="dl_f7ed1862570513d39685";
export const url=new URL("../icons/do_not_disturb_on_total_silence-fill.svg?v=95632870561751a5241f76f4b01e7ce76986f6baec9933633482ce6994e28387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

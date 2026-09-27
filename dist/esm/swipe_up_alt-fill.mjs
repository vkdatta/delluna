export const name="swipe_up_alt-fill";
export const id="dl_8fc79935fc4de5565ef1";
export const url=new URL("../icons/swipe_up_alt-fill.svg?v=9ef64b8c8e812be0b2069e9f2528aef9dccdc0ad32433ffd41425a57b7564db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

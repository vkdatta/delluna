export const name="event_seat-fill";
export const id="dl_1d1c362028c43dd7d1d1";
export const url=new URL("../icons/event_seat-fill.svg?v=3f8cfda724c59d43cec1b5201fa13623e8b9538943485fa4b75bbb92df75924c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar_view_week";
export const id="dl_15cfbcf041da13f8694d";
export const url=new URL("../icons/calendar_view_week.svg?v=9f2c7871ec3e0a6107b4b0ee6cd802b6d73dac8a02e54963af9c4b84911f6a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

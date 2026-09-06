export const name="format_underlined";
export const id="dl_ff55236163422def5eec";
export const url=new URL("../icons/format_underlined.svg?v=3ae3032a55d8ee235720538ea5dbf7558e759989358983525722bf50f655e616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

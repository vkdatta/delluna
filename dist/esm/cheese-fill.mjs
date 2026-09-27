export const name="cheese-fill";
export const id="dl_37bea35e969643ea989a";
export const url=new URL("../icons/cheese-fill.svg?v=9a25dfdca95fd0d98fdf0931c3017c9ef18ab40554c676bc948272909b94770d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

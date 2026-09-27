export const name="snowshoeing-fill";
export const id="dl_c1b133f6111d34cffb9b";
export const url=new URL("../icons/snowshoeing-fill.svg?v=2ce3ca8b4041552e3449bee7e910487c4a34225fe9d5cefb6d3156025eb3ed70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

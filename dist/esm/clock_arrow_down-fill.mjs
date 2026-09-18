export const name="clock_arrow_down-fill";
export const id="dl_6cbf81c09ee8461793b1";
export const url=new URL("../icons/clock_arrow_down-fill.svg?v=e1004330c7b9a8c0bfafe871c75a5007523b49fd9e5cddae9467ac14890b36ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-calendar-clock";
export const id="dl_007297fd1391493da0bc";
export const url=new URL("../icons/lucid_1-calendar-clock.svg?v=538afaef3db13fbdd6d74337bf3e2b7b98aaf4244dc4b91b6f8b3dd7551706be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

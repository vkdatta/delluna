export const name="line_start_square-fill";
export const id="dl_2249fe7fd55633076b6b";
export const url=new URL("../icons/line_start_square-fill.svg?v=7953060c01864a2a0b58af779a53b6bf36f544e081568c66db61204951a3378e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

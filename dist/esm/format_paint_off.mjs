export const name="format_paint_off";
export const id="dl_416de38940734dfcbc0c";
export const url=new URL("../icons/F/format_paint_off.svg?v=227d8ec60641695219553731b5609d1d3a46590419ed5fec5b985305cf428b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

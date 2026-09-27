export const name="format_h4-fill";
export const id="dl_b866cc1afddb14875af3";
export const url=new URL("../icons/format_h4-fill.svg?v=ffb6fe8ed474db119eb744dc657661afde3505e792025d1423ac95c5835c9b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="caret-double-down-fill";
export const id="dl_49b05128a8e54f59ba25";
export const url=new URL("../icons/caret-double-down-fill.svg?v=1738c08a4387c0811b34ad7be98be283aede5363f2fcd6457d8124f882088825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

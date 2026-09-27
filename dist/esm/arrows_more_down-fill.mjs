export const name="arrows_more_down-fill";
export const id="dl_4b4a8ecc48f6622bb985";
export const url=new URL("../icons/arrows_more_down-fill.svg?v=2ed079f3541295df32e540adec2583ed6d3f938a8559075d1b009c7e54fe2823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

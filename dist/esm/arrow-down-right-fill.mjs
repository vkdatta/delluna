export const name="arrow-down-right-fill";
export const id="dl_14038537068d4c4fb6dc";
export const url=new URL("../icons/arrow-down-right-fill.svg?v=6c1eb22816b640664dc68c573a305c5820d118697c457f6f03179e5d34b84325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

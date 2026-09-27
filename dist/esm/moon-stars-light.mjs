export const name="moon-stars-light";
export const id="dl_4636ce88d220456c9782";
export const url=new URL("../icons/moon-stars-light.svg?v=c0aa60af28a305624ef673976224ebde33690dfc64f846f1c4ada461fb1ac737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

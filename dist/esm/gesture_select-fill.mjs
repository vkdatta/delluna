export const name="gesture_select-fill";
export const id="dl_3cc60ea1561caa579941";
export const url=new URL("../icons/gesture_select-fill.svg?v=ff1ecf3ad34298ed7b98e4eb0296ae600714a50e79f65ad0f54bfebfaca15246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

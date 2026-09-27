export const name="battery-warning-fill";
export const id="dl_5c11111055074d189ce7";
export const url=new URL("../icons/battery-warning-fill.svg?v=ba98b02c5dfcf9a360afeb980bba02fc4477f2f4d842af2ac931234b5f48954f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

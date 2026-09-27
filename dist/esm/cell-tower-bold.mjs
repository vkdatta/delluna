export const name="cell-tower-bold";
export const id="dl_f3f22a8c2bc643488e8e";
export const url=new URL("../icons/cell-tower-bold.svg?v=3f83252e06b52864234eac19414bce90243b077595507607f9c3a09a9fca50a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

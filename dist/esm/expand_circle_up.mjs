export const name="expand_circle_up";
export const id="dl_6129285cd2b6deb0e0d3";
export const url=new URL("../icons/expand_circle_up.svg?v=12d3b033f1c1d888c7bbb341acc49f6819fa508a8d1119eaafb6a01b7fbbc8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

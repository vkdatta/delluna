export const name="caret-circle-up-down-light";
export const id="dl_f46bfa9bff9b4c1287d7";
export const url=new URL("../icons/caret-circle-up-down-light.svg?v=0f6b784e9e214805fcb3819dda9c3121d8a1a4dc26a8c2c9d876a098e1374d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

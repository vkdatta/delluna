export const name="caret-circle-up-down-light";
export const id="dl_f46bfa9bff9b4c1287d7";
export const url=new URL("../icons/caret-circle-up-down-light.svg?v=de2b2d64906021619d7e16a7a78859b5040e66ead03b6fb714dc1ba411cf7494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

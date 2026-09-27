export const name="browser-light";
export const id="dl_32cacd7d08464e80a949";
export const url=new URL("../icons/browser-light.svg?v=4762bd7dc9636aaeb3995d0b158d0697ed6fa03c3e1d892075fcee51373d2f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

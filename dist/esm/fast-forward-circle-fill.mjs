export const name="fast-forward-circle-fill";
export const id="dl_b8c77b3e9fbf41c483d7";
export const url=new URL("../icons/fast-forward-circle-fill.svg?v=6894134b2d63517ee2bbafb3a8e3056561dd6ea4d39e228ca80b5e8fd26d3f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

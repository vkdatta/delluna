export const name="hvac";
export const id="dl_b0df7f764eb5cb031a72";
export const url=new URL("../icons/hvac.svg?v=2d97eef176c1d3ca39d1836353c718b73d5e4b379900b28e030f351f2f625189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

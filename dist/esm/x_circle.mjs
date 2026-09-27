export const name="x_circle";
export const id="dl_d4ff3e37f3edebaa4591";
export const url=new URL("../icons/x_circle.svg?v=5442f4c62c0367ce4e0267ad1d5613142c3a288d2e681a345d57a1ff7fcf84b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

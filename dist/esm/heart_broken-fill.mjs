export const name="heart_broken-fill";
export const id="dl_334dffd47b5844c681b1";
export const url=new URL("../icons/H/heart_broken-fill.svg?v=d1833a1cd0ec098f6202c5f170a4bee39aee7791954a473376960b9e1b7c486c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

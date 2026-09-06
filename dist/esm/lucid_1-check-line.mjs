export const name="lucid_1-check-line";
export const id="dl_b3a5bbb5e4df464fa98b";
export const url=new URL("../icons/lucid_1-check-line.svg?v=fd6a3fa10fe43696934a7dfe4bc7d8caec54077545639fde0dadb65bcfa35326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

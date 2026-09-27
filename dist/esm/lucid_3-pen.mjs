export const name="lucid_3-pen";
export const id="dl_71d1e1637dc046669ef9";
export const url=new URL("../icons/lucid_3-pen.svg?v=8c9e1a4be2dff67adcadc48adf684031404be184d293bc66e6d3b061161a8155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

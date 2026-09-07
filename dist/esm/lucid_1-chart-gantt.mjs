export const name="lucid_1-chart-gantt";
export const id="dl_4043bf99afd14df98873";
export const url=new URL("../icons/lucid_1-chart-gantt.svg?v=ea436d38bb28cc7b1585a37cb53a166cbb1fbebdc340b8350f92af4fd5760822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

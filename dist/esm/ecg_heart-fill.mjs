export const name="ecg_heart-fill";
export const id="dl_962454b51c5aa89b825d";
export const url=new URL("../icons/ecg_heart-fill.svg?v=0d8514623d4753526bc9620f18b3450f3c708cb4822bc2eed299cf91f8b2f845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

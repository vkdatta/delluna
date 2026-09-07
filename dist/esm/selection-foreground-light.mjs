export const name="selection-foreground-light";
export const id="dl_0adbf1c268f148109925";
export const url=new URL("../icons/S/selection-foreground-light.svg?v=9b7b4a512ae7bafdcf73013b6ac6ef84fc2c9618732cca32444b0b8928e8d447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

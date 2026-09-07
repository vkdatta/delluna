export const name="selection-foreground-duotone";
export const id="dl_7aa549e06ae445fa9f01";
export const url=new URL("../icons/S/selection-foreground-duotone.svg?v=23956d051322734f93199e68381c658f1f81110cdb97cf467ca3eae5d3186444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

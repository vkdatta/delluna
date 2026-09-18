export const name="speed_1_5x-fill";
export const id="dl_3b2ae7ffba5044299a39";
export const url=new URL("../icons/S/speed_1_5x-fill.svg?v=54b18b3f90db36d325660bccf97f75a1de56eaf521091a2f2c5ef8f869ab981a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

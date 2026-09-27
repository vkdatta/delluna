export const name="double_arrow-fill";
export const id="dl_3eacc718c42cdd1331ea";
export const url=new URL("../icons/double_arrow-fill.svg?v=b5f3504a2fe768ae69924359403c9b51f5871fa75051ed4375c78f09905ca2da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-circle-five-bold";
export const id="dl_1fbfdd1922ed434986d0";
export const url=new URL("../icons/number-circle-five-bold.svg?v=e18a0b921af74a4d7632e87d46d0b0754101931cc78cf0ab2eb8075ae9954427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

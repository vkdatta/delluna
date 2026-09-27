export const name="rule-fill";
export const id="dl_fc43bc078b8d7ce1f1bd";
export const url=new URL("../icons/rule-fill.svg?v=513dc0bddb5eab8aa22afb8c1daaaced9449880e5f4c1a431d9ac7ad4d4194a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

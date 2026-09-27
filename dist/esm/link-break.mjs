export const name="link-break";
export const id="dl_d16bbc1650a0433b9902";
export const url=new URL("../icons/link-break.svg?v=4c3de77c710edd62eed4322cf129ded359b4d8fb66c8865de1837f09f8cd209c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

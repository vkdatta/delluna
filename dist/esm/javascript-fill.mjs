export const name="javascript-fill";
export const id="dl_a058f7cc340915ba1887";
export const url=new URL("../icons/javascript-fill.svg?v=9a7a2147a2d6d253b59f228c476f65c398d8e99f376604815c18e648f06a465b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

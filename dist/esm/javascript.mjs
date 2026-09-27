export const name="javascript";
export const id="dl_aac7084c9055b2e0401f";
export const url=new URL("../icons/javascript.svg?v=9a7a2147a2d6d253b59f228c476f65c398d8e99f376604815c18e648f06a465b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rule-fill";
export const id="dl_aa98840a60904517a26f";
export const url=new URL("../icons/R/rule-fill.svg?v=0401b15277b8e1c948a33f21d6681f3e0a0b20a124f4b4d2bb4968e8a4b02bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

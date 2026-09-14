export const name="aq";
export const id="dl_2cb7c9df1180467b9680";
export const url=new URL("../icons/A/aq.svg?v=1c39750d9dad19c8b2fe2542f860bd94cd8aac5de89c5a93397e7a0205bfe6e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

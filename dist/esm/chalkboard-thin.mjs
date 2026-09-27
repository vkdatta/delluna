export const name="chalkboard-thin";
export const id="dl_9e1500d3f1964afdbb06";
export const url=new URL("../icons/chalkboard-thin.svg?v=7da7b34371fcd2cf9771b475c6a044829f51bc0e76a01376d0b466cbc96d8998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

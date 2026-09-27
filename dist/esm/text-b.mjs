export const name="text-b";
export const id="dl_baf49eb22516adcc16a6";
export const url=new URL("../icons/text-b.svg?v=5ea305a7ffc844acbc9a2949157cd6ade9002d8e367d2b9e3f18d26af724bad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

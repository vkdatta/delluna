export const name="lucid_1-arrow-right-to-line";
export const id="dl_733ef2dab4e748088858";
export const url=new URL("../icons/lucid_1-arrow-right-to-line.svg?v=dd1447616b6803dbf29cdb610521d7feb0f0c08c67f584fce160f5d81bbd6df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

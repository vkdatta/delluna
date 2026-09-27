export const name="file-html-duotone";
export const id="dl_770cfcae627045fd8094";
export const url=new URL("../icons/file-html-duotone.svg?v=3aaa24b55dc4fd22107f36b257389a8931dbb5a721d106d23a1de1b28a1cd500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

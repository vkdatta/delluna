export const name="lucid_2-disc-2";
export const id="dl_2aaa1dec29b242409094";
export const url=new URL("../icons/lucid_2-disc-2.svg?v=7fb8a25b9f3073feabd431619c79e252990e45ba52ae7fc4220a5854a8ce9afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

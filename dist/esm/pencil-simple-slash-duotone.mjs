export const name="pencil-simple-slash-duotone";
export const id="dl_a814a85c4ef84e8cb33a";
export const url=new URL("../icons/pencil-simple-slash-duotone.svg?v=807fa0850dd1c3080d58d184c18b48027d891714bcf7f96f5f1a69a028e4e331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

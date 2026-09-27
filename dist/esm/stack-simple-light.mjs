export const name="stack-simple-light";
export const id="dl_3b4c12693b281a859a1c";
export const url=new URL("../icons/stack-simple-light.svg?v=9b9a960734fc21c7d5574457c197cc4a153188cd26385b90e0e459a8d019f952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="stack-plus-light";
export const id="dl_82226ed08b9645598dd5";
export const url=new URL("../icons/S/stack-plus-light.svg?v=2db75d78cbc0ce8bdfca12c9b24307eea3cb12df7471ebe6f801b6dc53d2a09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

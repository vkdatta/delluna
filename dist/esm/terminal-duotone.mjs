export const name="terminal-duotone";
export const id="dl_96840a6f51544ba6b08b";
export const url=new URL("../icons/T/terminal-duotone.svg?v=2783fd04f98d8d7bdeae8589f37dc20297bbc3c8db3cc5bf64b10735460bbedd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

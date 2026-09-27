export const name="scroll-thin";
export const id="dl_e9cac66eb9c1c86831b5";
export const url=new URL("../icons/scroll-thin.svg?v=6036dd626f3dd0da27c426e9b77ac31094f787e1b3b905d7a6bfed89f3efa4aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

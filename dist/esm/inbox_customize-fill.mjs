export const name="inbox_customize-fill";
export const id="dl_a7bfbf4d5323de2457b1";
export const url=new URL("../icons/inbox_customize-fill.svg?v=b6219653344bc07fd17e90136f9f299e2e1ae2a4bbeb5cef680bc37c6894d326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

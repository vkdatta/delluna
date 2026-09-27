export const name="high-definition-fill";
export const id="dl_628c0f43bda848d7bd52";
export const url=new URL("../icons/high-definition-fill.svg?v=ad3fb85fa1a0015305fb3dcba4b424e3205431a2bcbe36dddbc079463823eacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

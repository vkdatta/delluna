export const name="terminal_2-fill";
export const id="dl_0e7c39364c1f4531a736";
export const url=new URL("../icons/terminal_2-fill.svg?v=f86047444433581d7c905aa8a28ac9abd407a9f9f18c28d5096cd631765baa4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

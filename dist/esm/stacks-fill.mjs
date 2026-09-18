export const name="stacks-fill";
export const id="dl_ff8c9815e048434dac9e";
export const url=new URL("../icons/S/stacks-fill.svg?v=6fc2a5653aa9fc8f07cd884437d325be8727281e3b6f12eea47ddb5f1338c9df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

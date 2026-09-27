export const name="stack";
export const id="dl_8ad41bffa4c421032d73";
export const url=new URL("../icons/stack.svg?v=db4bef40b7c0cb8c5abd5ba4c24f4c384c146086a663e2e98cf8002b082ea52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

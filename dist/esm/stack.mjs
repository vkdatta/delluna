export const name="stack";
export const id="dl_ff31e0afe5a5c3d2889b";
export const url=new URL("../icons/stack.svg?v=7aae7ec4204cb278110e81ff5745caf8429b9deefec9d38ae40ba3958490fb10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

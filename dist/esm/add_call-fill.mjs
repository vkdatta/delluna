export const name="add_call-fill";
export const id="dl_045eca8f2e09638af250";
export const url=new URL("../icons/add_call-fill.svg?v=adfd221e12631aa7b829d8e86e67494f54a72657e540b66aabf45b8c6956759f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

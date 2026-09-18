export const name="stack_group";
export const id="dl_60749fbeb473489c9b51";
export const url=new URL("../icons/stack_group.svg?v=4c5098a2a3839e255acfe9f4991661945c63901aa09d0d3c56e1c6c6f5ff6201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

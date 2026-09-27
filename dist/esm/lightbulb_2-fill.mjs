export const name="lightbulb_2-fill";
export const id="dl_f7a83bed99c77bfb4fa3";
export const url=new URL("../icons/lightbulb_2-fill.svg?v=e84ddf78c8f04cf5db55e15c97563188b5b801e37ebab9137664e01b0d7fadff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

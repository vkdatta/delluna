export const name="stack_off";
export const id="dl_7532346452135cd652b0";
export const url=new URL("../icons/stack_off.svg?v=045a445d729dd1f54f3cf8b81be71a2bc8e0b4336d6efe9e821ec6e30cca81bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

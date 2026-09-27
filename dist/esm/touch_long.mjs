export const name="touch_long";
export const id="dl_b513e1b1cd5db70114f9";
export const url=new URL("../icons/touch_long.svg?v=a4f26b1512baa26c950aff518af21b2978db30a3df5d417d367aed7f7f0aac92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

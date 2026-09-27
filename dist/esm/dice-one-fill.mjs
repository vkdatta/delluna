export const name="dice-one-fill";
export const id="dl_2f62ae1fb67849df9dc8";
export const url=new URL("../icons/dice-one-fill.svg?v=19b3dd847fd343c271711c16dda4436fa515abdeb9f2cbbb4953452fab24c383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

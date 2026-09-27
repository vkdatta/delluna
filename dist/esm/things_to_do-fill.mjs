export const name="things_to_do-fill";
export const id="dl_40f88945bfdc528d2792";
export const url=new URL("../icons/things_to_do-fill.svg?v=04a7b5af89579215bfb6c61de53fc647a7f15dff4a433787a6c55455ebd0b160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

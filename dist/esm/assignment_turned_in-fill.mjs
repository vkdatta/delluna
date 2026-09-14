export const name="assignment_turned_in-fill";
export const id="dl_2ce56fde46474b68acb5";
export const url=new URL("../icons/A/assignment_turned_in-fill.svg?v=c4c7ff0b276301911f03a86b2f58bc66c3e233ad2c20f0d4699ed6bb04e4273d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

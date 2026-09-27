export const name="arrow-square-up-right-thin";
export const id="dl_bab11487e5134c3d933c";
export const url=new URL("../icons/arrow-square-up-right-thin.svg?v=5684a981fcfeaba51a1b62499486a9f15d6dc9cadd336691839898641f056dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

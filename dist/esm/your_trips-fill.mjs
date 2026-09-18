export const name="your_trips-fill";
export const id="dl_0f89399eedff48b688fd";
export const url=new URL("../icons/Y/your_trips-fill.svg?v=6ea9cde287f8c79a3574720dfd30141d40b8733fef890b3a0b0671c6e6fe2b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

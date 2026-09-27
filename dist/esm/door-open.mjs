export const name="door-open";
export const id="dl_101f5f25a7bc4f0bade1";
export const url=new URL("../icons/door-open.svg?v=0b60064817136e3e8313db0bfd0a198bfb406b6651f72e30ea7d54316197d47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

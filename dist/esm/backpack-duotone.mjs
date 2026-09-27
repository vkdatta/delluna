export const name="backpack-duotone";
export const id="dl_53502dafab6944da8db1";
export const url=new URL("../icons/backpack-duotone.svg?v=fe22ece2b3000a51e45003fe9a27b071e141cf1976614ae9ae6c81066b805adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

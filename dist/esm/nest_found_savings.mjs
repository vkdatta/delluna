export const name="nest_found_savings";
export const id="dl_9ea4df9c074d9f9d5a7c";
export const url=new URL("../icons/nest_found_savings.svg?v=deadd4a64e6cdf78a140bd5cdc85ecab19743d01d7f18e6a844fc44f745517e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

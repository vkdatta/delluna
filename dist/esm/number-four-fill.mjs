export const name="number-four-fill";
export const id="dl_4d559be18edb42878bd7";
export const url=new URL("../icons/number-four-fill.svg?v=c31ad34d131a5f9c4dbe213cc1ede857d5eca8f0af3fabd4a5200f419b578a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

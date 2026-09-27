export const name="piggy-bank";
export const id="dl_5f409c0a601a4a1c82de";
export const url=new URL("../icons/piggy-bank.svg?v=65b6d3a03be244cf2d862f7b8f0e6f94fbe9536b5f35c6315f13728cf2101dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

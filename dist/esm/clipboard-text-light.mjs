export const name="clipboard-text-light";
export const id="dl_0540c8a56d3442299dae";
export const url=new URL("../icons/clipboard-text-light.svg?v=4edccc1e2dd857f3b2fb763a9c853292e7d38d20a6e1e7f8e93a7b3d1af32a0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

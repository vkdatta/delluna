export const name="fire-extinguisher-duotone";
export const id="dl_4773996ea6dd49fe923c";
export const url=new URL("../icons/fire-extinguisher-duotone.svg?v=434e7893034b38a807fa6a753654a119e0ad6e15bd9eb00c08c2c38435facc35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

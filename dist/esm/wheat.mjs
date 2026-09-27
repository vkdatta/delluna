export const name="wheat";
export const id="dl_7907ae95a8f24867a6d6";
export const url=new URL("../icons/wheat.svg?v=3d084425c0803c019c86d8b90802887ee6ddd63db678edd04266682f6e51cebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

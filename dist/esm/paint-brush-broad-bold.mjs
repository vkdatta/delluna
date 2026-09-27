export const name="paint-brush-broad-bold";
export const id="dl_2e77d5027b7f43bcbdfa";
export const url=new URL("../icons/paint-brush-broad-bold.svg?v=177c534e72c0834b096e9742a36fb8de68ab5e9d3d96ff6312f4f04a69aa8fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

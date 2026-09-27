export const name="layers_clear";
export const id="dl_12fe5690bb55a756e4b5";
export const url=new URL("../icons/layers_clear.svg?v=3e6c57baa5a6cbddf8e9677272fff8271387c7b5c0ff47f02ac591b59f9c83b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

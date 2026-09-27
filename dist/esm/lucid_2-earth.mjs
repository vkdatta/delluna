export const name="lucid_2-earth";
export const id="dl_248341fc7dc640438aa4";
export const url=new URL("../icons/lucid_2-earth.svg?v=d6c5792b95f498c4e2702b2ff4ade2f2ba6fa235a34d87f74ae87129e662c7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="graph-light";
export const id="dl_e0a9c9a563f549ffb1b3";
export const url=new URL("../icons/graph-light.svg?v=59c5949345e6ba46ab7912d7f29ce51b1efcfdbbaf473f031862eb894f0cdd66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="swatches-bold";
export const id="dl_1a14b7b719eb40b0a283";
export const url=new URL("../icons/S/swatches-bold.svg?v=9b1d4ba49657b97b8c89dd8c9fd68ba209eff4517cdcb258d89ef0abe5a5e12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

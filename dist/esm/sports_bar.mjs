export const name="sports_bar";
export const id="dl_561bb495baea83ee6960";
export const url=new URL("../icons/sports_bar.svg?v=9fd4e301fc2e8125018c1ed72457b52e29f16fd518c87a6e2e0a84f428960947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

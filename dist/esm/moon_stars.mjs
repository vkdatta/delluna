export const name="moon_stars";
export const id="dl_da14516ac48a146b3785";
export const url=new URL("../icons/moon_stars.svg?v=502d198dd495200d45ad4209575994f6d118f928949146730f833b09ce3034f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

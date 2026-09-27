export const name="puzzle-piece-light";
export const id="dl_8714e76b593f468581d3";
export const url=new URL("../icons/puzzle-piece-light.svg?v=3aacf370c1d5a45ab167ed753d67b94278fae5e3796c148545811c969e11d9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

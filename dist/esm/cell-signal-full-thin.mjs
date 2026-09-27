export const name="cell-signal-full-thin";
export const id="dl_7d2618d2c43145ee9fef";
export const url=new URL("../icons/cell-signal-full-thin.svg?v=baaaca0cee7473484f4c4acdc44a09c702132d935f5146f6e115638e33211e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

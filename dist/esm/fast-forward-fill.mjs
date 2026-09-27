export const name="fast-forward-fill";
export const id="dl_044397962d8e40519a00";
export const url=new URL("../icons/fast-forward-fill.svg?v=264a9072adcb28a7c390c7e01f67a7374cf81415aaea68745899978173c177e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

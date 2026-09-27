export const name="linear_scale-fill";
export const id="dl_4f61c9a2a256175fd27e";
export const url=new URL("../icons/linear_scale-fill.svg?v=426335ebc352d95ddb75fb064289bb588eb6f80dc56ea8799784a293b3e734e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

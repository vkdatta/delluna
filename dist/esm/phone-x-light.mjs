export const name="phone-x-light";
export const id="dl_d3a6a269879240108c19";
export const url=new URL("../icons/phone-x-light.svg?v=5afa53f85d843274b601f0d165fa8ab87db95d6752c447ed3e98892eee70ee4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="signpost-bold";
export const id="dl_e8d8a166d32d466d95b8";
export const url=new URL("../icons/S/signpost-bold.svg?v=970e276239ffd828cca3163262d56fce00ff37346a0e9680ec90c2b2400d3e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

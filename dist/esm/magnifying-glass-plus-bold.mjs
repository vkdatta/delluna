export const name="magnifying-glass-plus-bold";
export const id="dl_e4ee422d94eb4e128c89";
export const url=new URL("../icons/magnifying-glass-plus-bold.svg?v=f328f24b11e1b00c91ab2d3db9bd846527cbbc21d157870d0ba3ef379444df4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

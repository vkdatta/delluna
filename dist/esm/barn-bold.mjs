export const name="barn-bold";
export const id="dl_3c2e6eee6e184df2b68b";
export const url=new URL("../icons/barn-bold.svg?v=63ed6590f49b0778df66af9ed43a30d070bc59b53feff8f4973b299d9bdc0cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

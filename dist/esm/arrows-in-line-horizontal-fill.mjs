export const name="arrows-in-line-horizontal-fill";
export const id="dl_45dd055ccf6f4b888f88";
export const url=new URL("../icons/arrows-in-line-horizontal-fill.svg?v=3cde739ac3d970399871540a9d5d571f966ad328e286aef011e1066a4971dfa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

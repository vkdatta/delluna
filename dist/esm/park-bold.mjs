export const name="park-bold";
export const id="dl_121f97cecf4446fc8e58";
export const url=new URL("../icons/park-bold.svg?v=dddcf4c8944bbec73c8e58bbb75f726291201d0eaaee8956b04184d57779b048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

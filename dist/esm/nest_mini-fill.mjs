export const name="nest_mini-fill";
export const id="dl_2da6fdb03f424efe959a";
export const url=new URL("../icons/nest_mini-fill.svg?v=ad2ec4f1b1c363d3c016fd8b65430ec3704edb93a12fafc4bb229183639d0629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

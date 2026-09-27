export const name="specific_gravity-fill";
export const id="dl_518ebc1270aced7a38f3";
export const url=new URL("../icons/specific_gravity-fill.svg?v=7f2ba0b2dd61a4c7b51a2d44a91508cf09efc0449431b52b5bed58bd132e3874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

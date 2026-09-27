export const name="swimming-pool-thin";
export const id="dl_ce91ad68a6d9f557c351";
export const url=new URL("../icons/swimming-pool-thin.svg?v=024224631ce55acff2320ffdc89d45430199c90231d6ba503f67a6786dd00f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

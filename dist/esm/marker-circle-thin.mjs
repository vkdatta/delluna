export const name="marker-circle-thin";
export const id="dl_abc30b4a152d4de18ad0";
export const url=new URL("../icons/marker-circle-thin.svg?v=e67fab10643760cba31ba529074fd2db1de55bcfdd56a662fce4a56700617921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

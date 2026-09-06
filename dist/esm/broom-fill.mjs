export const name="broom-fill";
export const id="dl_c3e5e79365064812b987";
export const url=new URL("../icons/broom-fill.svg?v=e6cd873e2cb2251c070902eb3804978c88972918992e19484b065d2dd469178c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

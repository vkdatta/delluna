export const name="dribbble-logo-bold";
export const id="dl_d7989dbd8d764172b164";
export const url=new URL("../icons/dribbble-logo-bold.svg?v=bbea5d3f4acf2a65d0d5d811871dd7334ac6c2ea53feb1dae0000b0df31f14b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="landscape-fill";
export const id="dl_984d4080c74043f4d38a";
export const url=new URL("../icons/landscape-fill.svg?v=ab05d6d476f2ef6016c4c6c4334bdaa9ff2c133c84608094a747ac630d577204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="coin-light";
export const id="dl_fc77c48be35b4c1fa089";
export const url=new URL("../icons/coin-light.svg?v=3729f82a3168549dac43c4af2dfdfa9d7156b44233d9e6c962d5236cf58c6520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

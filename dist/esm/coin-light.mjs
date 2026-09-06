export const name="coin-light";
export const id="dl_fc77c48be35b4c1fa089";
export const url=new URL("../icons/coin-light.svg?v=76cc63924353e0997276e1284f9df0a9cf6db5d98175df19e4757c0af6bfbff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

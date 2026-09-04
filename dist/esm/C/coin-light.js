export const name="coin-light";
export const id="dl_fc77c48be35b4c1fa089";
export const url=new URL("../../icons/C/coin-light.svg?v=76cc63924353e0997276e1284f9df0a9cf6db5d98175df19e4757c0af6bfbff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

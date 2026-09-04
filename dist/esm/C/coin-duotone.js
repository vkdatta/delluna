export const name="coin-duotone";
export const id="dl_d8a801688f1f4e458062";
export const url=new URL("../../icons/C/coin-duotone.svg?v=cb9ae57d422bc770b183a9ef57de191e0f04d5cf0fff1f222ccac5a979cb10f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

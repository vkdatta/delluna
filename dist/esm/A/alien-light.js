export const name="alien-light";
export const id="dl_bfe19ba2480447e08db3";
export const url=new URL("../../icons/A/alien-light.svg?v=70189c2a731ef331dfe2fc93f2c4e2797257b09393166a3eb78647d2284e02aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

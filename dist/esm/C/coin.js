export const name="coin";
export const id="dl_b8b61cc8309f447ba3a3";
export const url=new URL("../../icons/C/coin.svg?v=19465a4b7b71a1e184fcbea05e81ca4c83d1591ecb16623a47a21dbb6f107ee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

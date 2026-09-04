export const name="carrot";
export const id="dl_d8606e65e060401ebcdd";
export const url=new URL("../../icons/C/carrot.svg?v=dfc4aee879277035de2fe4cd25d66f263a477d8477c64b8012998e5415d001bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

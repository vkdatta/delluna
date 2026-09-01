export const name="backspace";
export const id="dl_d71c9730fd21bfb0587d";
export const url=new URL('../icons/backspace.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

export const name="document_scanner";
export const id="dl_bd69f28695a0960b8c99";
export const url=new URL('../icons/document_scanner.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

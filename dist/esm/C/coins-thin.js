export const name="coins-thin";
export const id="dl_80f4b774d88845baad76";
export const url=new URL("../../icons/C/coins-thin.svg?v=f3e5b3ca33a87d860bcc9307d1f143c6abc02bafffa67ed43f60865923e66e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

export const name="apple-logo";
export const id="dl_8849292ab8d14eac9b53";
export const url=new URL("../../icons/A/apple-logo.svg?v=eda34697a0e75fec1732b55ae97b75868615696993a4fa8fff6029cd63498ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

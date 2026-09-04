export const name="heart";
export const id="dl_39b3883f822f44a6912d";
export const url=new URL("../../icons/H/heart.svg?v=312dee73d1d969631d5498012f619ccf4edbdf31e1be3e65af4f4f1b3ac1b2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

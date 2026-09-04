export const name="reddit-logo-duotone";
export const id="dl_3a448ddc92884b6583b7";
export const url=new URL("../../icons/R/reddit-logo-duotone.svg?v=561e5f200973493c5c473195005bfd9f2b113e9842da489299f8d901b1ad6bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

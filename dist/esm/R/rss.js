export const name="rss";
export const id="dl_4b495c683c244b9bafc2";
export const url=new URL("../../icons/R/rss.svg?v=468b597bf8c730bcd63d7ebdd53b212b2fbb4950fbcac5694a57fd31d3d3cb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

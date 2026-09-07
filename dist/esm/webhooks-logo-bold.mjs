export const name="webhooks-logo-bold";
export const id="dl_e3281c297c92447c99f9";
export const url=new URL("../icons/W/webhooks-logo-bold.svg?v=38d142ae1e1b297a7358b769cca100569f39e9dfc5944b255392dcb452bca984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

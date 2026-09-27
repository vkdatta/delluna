export const name="webhooks-logo-bold";
export const id="dl_094381307b415be75a73";
export const url=new URL("../icons/webhooks-logo-bold.svg?v=38d142ae1e1b297a7358b769cca100569f39e9dfc5944b255392dcb452bca984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

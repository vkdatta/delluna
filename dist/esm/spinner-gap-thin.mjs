export const name="spinner-gap-thin";
export const id="dl_c6aa105f93f652258f2c";
export const url=new URL("../icons/spinner-gap-thin.svg?v=b5b9caba921494bd86712e6041e6786f74cf3649b79a3b978b981f95daafef92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

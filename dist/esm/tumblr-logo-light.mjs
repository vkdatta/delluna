export const name="tumblr-logo-light";
export const id="dl_f4d27fed33fd4b398d41";
export const url=new URL("../icons/T/tumblr-logo-light.svg?v=c37777ce26c035f241ceebe42597eee401c0efc187eb34bb7cdba2040d0ceb6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

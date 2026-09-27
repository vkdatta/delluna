export const name="medium-logo-bold";
export const id="dl_84cd2633174d4a4c8ee2";
export const url=new URL("../icons/medium-logo-bold.svg?v=5e3b2117b0c119b80c4f2193b7460dd4b89c2038808bcc4b54d3eb6ebaf6c0b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

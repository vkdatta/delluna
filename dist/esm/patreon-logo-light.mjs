export const name="patreon-logo-light";
export const id="dl_d9b653e2aaa948bf9b56";
export const url=new URL("../icons/patreon-logo-light.svg?v=a2af6cab0684ce80c0f68c98e193b5612f8a1544794fd9b419d69cfcc412ffb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

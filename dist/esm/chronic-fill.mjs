export const name="chronic-fill";
export const id="dl_5780f8dd26864628b724";
export const url=new URL("../icons/C/chronic-fill.svg?v=e7ae9d72c009cfaca0231ea358dc6cc51d9f1d54e8ea2873edef504fd5da5495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

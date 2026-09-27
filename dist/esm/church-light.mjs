export const name="church-light";
export const id="dl_8cb0a38871b64dfc83da";
export const url=new URL("../icons/church-light.svg?v=3a3c90a422cd3ff9bcbe3ecc038dc0f2eed446a8b080981be4689f79ee5dff23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

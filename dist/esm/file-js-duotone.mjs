export const name="file-js-duotone";
export const id="dl_37d60bdd006f47d787b1";
export const url=new URL("../icons/file-js-duotone.svg?v=585a70752612f564480aca0870067b600c9dcb84d556e91847a4e09a47deefbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

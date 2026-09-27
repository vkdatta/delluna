export const name="rows-plus-bottom-light";
export const id="dl_014c52ec75fb48f3ab5d";
export const url=new URL("../icons/rows-plus-bottom-light.svg?v=aaf0dceb0ba9dd26efa3010f8166581bb7c272028fc8a8a4cd0a9f1827c1674e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

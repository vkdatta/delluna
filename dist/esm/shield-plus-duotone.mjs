export const name="shield-plus-duotone";
export const id="dl_534d656efeac8fdcda69";
export const url=new URL("../icons/shield-plus-duotone.svg?v=ef18dc4a8fb603fd35e0332fb09e6f55f751aabdeb78af3eb822e58df97cac67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

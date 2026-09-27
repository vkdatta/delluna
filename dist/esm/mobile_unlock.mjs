export const name="mobile_unlock";
export const id="dl_3c39b350f5b276bffc1f";
export const url=new URL("../icons/mobile_unlock.svg?v=833aeb9cc833e89cc9040e37f11e03278e024df08ddfcdecfefac6df5d039e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

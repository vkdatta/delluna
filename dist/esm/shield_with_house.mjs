export const name="shield_with_house";
export const id="dl_eb2eedc1f6d1dba06a21";
export const url=new URL("../icons/shield_with_house.svg?v=73904c892319f5a5c2ce7bd8bf82095ea78d46cf714c748ee2518ee70b268288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

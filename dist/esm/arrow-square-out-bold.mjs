export const name="arrow-square-out-bold";
export const id="dl_f34dd41e31564e75a932";
export const url=new URL("../icons/arrow-square-out-bold.svg?v=914a9241bf3ea772d37604c86809a2c68d60b6cb2e950cdec46a30dc1472e82d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

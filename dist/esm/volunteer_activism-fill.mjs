export const name="volunteer_activism-fill";
export const id="dl_1703fda0efec8a677fb2";
export const url=new URL("../icons/volunteer_activism-fill.svg?v=ccdcebd5636bb09da882de7827d47ac27641ddff087b3fa7b29c81c0f2d94310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-zero-fill";
export const id="dl_e24e7d1ed5db4b0ca11b";
export const url=new URL("../icons/number-zero-fill.svg?v=c33b545ff657ccb3216613eba56aff4bec3625bc9ef10688c971a35bb3b8de72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

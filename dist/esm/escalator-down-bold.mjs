export const name="escalator-down-bold";
export const id="dl_3a1039ab22164137b794";
export const url=new URL("../icons/escalator-down-bold.svg?v=597a809a00240a73c1e9025c0dfa40ccc2c6d744464e5b401c2a3c23295bb55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

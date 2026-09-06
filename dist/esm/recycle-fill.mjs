export const name="recycle-fill";
export const id="dl_654c3bee45984d9ea2d6";
export const url=new URL("../icons/recycle-fill.svg?v=9423a20a9afa499fd6099fc1010138012fdc2e680533faf5c31181740c82663e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

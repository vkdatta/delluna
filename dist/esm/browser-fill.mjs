export const name="browser-fill";
export const id="dl_73774f14855440fca7a1";
export const url=new URL("../icons/browser-fill.svg?v=b85981b6dacdee90d25c4db6a38bf6a96e6809675e283e7675314361bb020fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

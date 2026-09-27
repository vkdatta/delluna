export const name="cricket-thin";
export const id="dl_0b4f7bdb9217472694f4";
export const url=new URL("../icons/cricket-thin.svg?v=09cd37f5694cbc4490f14c8637611e6ef60e4f0273dae7142e6ab780e48af6b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

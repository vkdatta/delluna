export const name="presentation-chart-thin";
export const id="dl_ccf195a849c9494da69c";
export const url=new URL("../icons/presentation-chart-thin.svg?v=12706891e7bd1e0a1020ac88e693f0e1992c1e54a5fb390676149d872eebab8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

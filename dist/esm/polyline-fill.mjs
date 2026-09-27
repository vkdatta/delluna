export const name="polyline-fill";
export const id="dl_205fbf153afc088b6488";
export const url=new URL("../icons/polyline-fill.svg?v=5dc7a6cf06f61dfa5fc1085eb51c8ae22fbed016a409d4d7626b922c1c10ba31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

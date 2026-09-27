export const name="pinwheel";
export const id="dl_579617bd44e94697bb73";
export const url=new URL("../icons/pinwheel.svg?v=5cdf96877b3bafa90325ee2dae43572194d5147bf1a0d833d55d73b88bb6e07e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="game-controller-thin";
export const id="dl_ec1aca5186f7460283a1";
export const url=new URL("../icons/game-controller-thin.svg?v=8eca9a6fa1a689aec06957c6b4c0e6162655ac2854c574531186323a26e0993f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

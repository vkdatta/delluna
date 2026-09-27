export const name="fire-thin";
export const id="dl_6192728035eb454f8da0";
export const url=new URL("../icons/fire-thin.svg?v=c36495015178f232b95303a43b8faf9027194b9c088268e7ac0df02341e3348a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

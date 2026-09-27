export const name="hand-coins-thin";
export const id="dl_e74461c8a4394b3f885c";
export const url=new URL("../icons/hand-coins-thin.svg?v=6954e12595ec618379debc170394bfab69b9b8db360b940cdfb653fe9439cf1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

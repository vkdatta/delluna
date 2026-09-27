export const name="linktree-logo-thin";
export const id="dl_9744cd4f863243a29841";
export const url=new URL("../icons/linktree-logo-thin.svg?v=9f743850244f4504777d40bed32cd8dd0ee38eecde2750cd62361abd992dd013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

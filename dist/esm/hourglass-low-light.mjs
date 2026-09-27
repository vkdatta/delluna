export const name="hourglass-low-light";
export const id="dl_4b6cc5d595db4e3f976a";
export const url=new URL("../icons/hourglass-low-light.svg?v=5577cc6ca39bc6bcad4043d5ffd8bf6b06767394072fcfc9831f20a3f52a7277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

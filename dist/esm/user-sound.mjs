export const name="user-sound";
export const id="dl_57bfbc77d0404df1639a";
export const url=new URL("../icons/user-sound.svg?v=5a4f1ab790152767e750570a748fdfca9b4b5c7d88651b404099c22923af78a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

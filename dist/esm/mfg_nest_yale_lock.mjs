export const name="mfg_nest_yale_lock";
export const id="dl_21cf7476aee040518642";
export const url=new URL("../icons/mfg_nest_yale_lock.svg?v=78062cd1d1ede13454905bdad45e33c68a4feeb5f19817d9b6b47db0559ea26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user-sound-fill";
export const id="dl_3d0351586f1f441a9349";
export const url=new URL("../icons/U/user-sound-fill.svg?v=e42ee68e903bd45a00c8bd840ca5bf055b1ac0405a6f29437526a9b9ea53f79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

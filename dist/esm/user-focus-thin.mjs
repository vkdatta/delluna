export const name="user-focus-thin";
export const id="dl_893922173219259c9851";
export const url=new URL("../icons/user-focus-thin.svg?v=35b57a7061564aa030eb118cc1fdf4579d9dd9298d5a72815c763e3d1a557187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

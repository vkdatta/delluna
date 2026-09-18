export const name="login-fill";
export const id="dl_2d53dec54e684ad2b6a9";
export const url=new URL("../icons/L/login-fill.svg?v=5c5534ae6afa90a465a7bb72caeeb132dda2803b5713c2aa853cbbd309540a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

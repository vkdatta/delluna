export const name="propane_tank";
export const id="dl_fdcfce400dc2bb2fa538";
export const url=new URL("../icons/propane_tank.svg?v=02d16e8e12810eb5b07e42a2f4a69754d1dd63af96a11f00ae1c938e029c8410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

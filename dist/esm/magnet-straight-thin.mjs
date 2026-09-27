export const name="magnet-straight-thin";
export const id="dl_539713373b0a4acc8a18";
export const url=new URL("../icons/magnet-straight-thin.svg?v=d963a985afd580f49f22c78d44ce4533f3315c535b1db32f611189deb7a0bbc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

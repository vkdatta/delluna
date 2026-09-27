export const name="hammer-thin";
export const id="dl_fe72af643aea47e3875e";
export const url=new URL("../icons/hammer-thin.svg?v=2049b1ff69772c0b78b70e24519e727dc41bf6660d1496b6a3a5fecce2fc4326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

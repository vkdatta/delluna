export const name="shield-chevron";
export const id="dl_e2a6e258dd810c066f42";
export const url=new URL("../icons/shield-chevron.svg?v=3dac7fb33571594d5e90d43275772c309ed9eb3cb265d82ed312e2b85e3f878f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

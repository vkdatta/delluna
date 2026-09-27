export const name="yoshoku";
export const id="dl_f365f5333097c2b73e74";
export const url=new URL("../icons/yoshoku.svg?v=7cb6be396c50e32e52879c0c0383e50754e8796c6eb40bb8f09683a2b86b05ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

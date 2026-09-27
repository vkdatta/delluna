export const name="lucid_1-aperture";
export const id="dl_a76b97a9793142638a55";
export const url=new URL("../icons/lucid_1-aperture.svg?v=d789edcce5bc273b1b218f0804084da9124ae7521fbc7f42d142fe85f5feb117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

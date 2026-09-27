export const name="fort-fill";
export const id="dl_828ee3a068110f9da86d";
export const url=new URL("../icons/fort-fill.svg?v=52ddfc911561090481e498e4da48075776e32a487bf0c4141e84320187bdce9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

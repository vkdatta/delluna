export const name="sun-dim-light";
export const id="dl_266fc2f1d68106049e69";
export const url=new URL("../icons/sun-dim-light.svg?v=db838a6a7ac963b8fabc1e531d39b325c07531962f85e5d59775efab36ff2c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

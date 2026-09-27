export const name="avocado_bean";
export const id="dl_b83817e12e66e26adb96";
export const url=new URL("../icons/avocado_bean.svg?v=9cdb1c15b169c6e3ddb31cb8923e2c692c6fe75ec4facc56aba72ac871d14f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

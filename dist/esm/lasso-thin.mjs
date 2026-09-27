export const name="lasso-thin";
export const id="dl_3d1374142e614cc6b733";
export const url=new URL("../icons/lasso-thin.svg?v=97d482fb6c24d13fec27ad540970695aab66dc837835ea5e887a8dd83784f7b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lasso-thin";
export const id="dl_3d1374142e614cc6b733";
export const url=new URL("../icons/lasso-thin.svg?v=cc788cdd96286dcd32af819a27d47daf990e729a6f99e53d10e2bcbc07a5cfc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

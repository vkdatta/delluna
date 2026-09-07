export const name="arrow-fat-line-up-duotone";
export const id="dl_657549d7443b44ed9d96";
export const url=new URL("../icons/arrow-fat-line-up-duotone.svg?v=4f6dde1372578e96f7740acb6bc541428e45b22e049058011ab4e823e0208007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="align-center-horizontal-simple-duotone";
export const id="dl_79c2d6dedcfb415aac69";
export const url=new URL("../icons/align-center-horizontal-simple-duotone.svg?v=a242efb421d918e237e4aaddb0feed179f158dd2dda721a1400365067ec3d468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

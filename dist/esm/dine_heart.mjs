export const name="dine_heart";
export const id="dl_57a133342d0cc9f723cd";
export const url=new URL("../icons/dine_heart.svg?v=8e52724a12ec85ae82ee1f830e59ecb6cb134a48b7dccfc08592df5a43a439cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="goodreads-logo-duotone";
export const id="dl_acb0cf1017d044d482ed";
export const url=new URL("../icons/goodreads-logo-duotone.svg?v=26ca3379a3d286548666510b55073697a75e35852ae37530dc03fea4000995b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

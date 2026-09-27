export const name="matrix-logo-fill";
export const id="dl_8dd149b46761457cb281";
export const url=new URL("../icons/matrix-logo-fill.svg?v=0616a3bb46dab6e93f325811a9eec8ce468c1f650870893761a917fdb7349926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

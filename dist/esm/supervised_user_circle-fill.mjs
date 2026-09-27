export const name="supervised_user_circle-fill";
export const id="dl_91168bcf2bbb5d2afde4";
export const url=new URL("../icons/supervised_user_circle-fill.svg?v=6cc7514d11c5314d9ea2d7a97660c72ce8a180d41d9adf92fd28e473a605acdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

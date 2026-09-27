export const name="house_siding-fill";
export const id="dl_9921dc3fdeda35f3d9db";
export const url=new URL("../icons/house_siding-fill.svg?v=6af93705af6731e329bfa8386bff5eb6a04aba3ef8cbc448584761fea4d89641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-square-one-duotone";
export const id="dl_edeae155e0044499a3fb";
export const url=new URL("../icons/number-square-one-duotone.svg?v=4708531adf0e9db3fbe1d4dedf8ce8b6e3723fae313c9ccb8a35cbb816612628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

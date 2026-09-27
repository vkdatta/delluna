export const name="users-three-light";
export const id="dl_813cd96a4cdf13623807";
export const url=new URL("../icons/users-three-light.svg?v=8f5089071bea76fb408f0dc37cc773b178823bdc234e5da7aaa8a8980bfe9101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

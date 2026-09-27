export const name="eye-light";
export const id="dl_4ef7c109a7aa4be2a2c8";
export const url=new URL("../icons/eye-light.svg?v=5a236266c1cd423f44471a360d9cdebeb1987845e2be05624545d306d9f15acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

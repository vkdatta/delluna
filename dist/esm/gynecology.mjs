export const name="gynecology";
export const id="dl_1de153e11fae123c7133";
export const url=new URL("../icons/gynecology.svg?v=0278ed6c98f4e48d3c57075d041b69da02d908d074f60b73d80172cec1ac8648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

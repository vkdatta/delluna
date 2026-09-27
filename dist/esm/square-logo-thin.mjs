export const name="square-logo-thin";
export const id="dl_67d80de2d9e58b9d7471";
export const url=new URL("../icons/square-logo-thin.svg?v=e7a8268005dca9ae5baadbbd9f8dd02b3ea0db1dfca49db0103ce16922de1102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-circle-one-fill";
export const id="dl_bd9eeb23a9704e2c95bc";
export const url=new URL("../icons/number-circle-one-fill.svg?v=d0cee5275e4b578278f8efecbca80d7100db6fe67abbf632703c889d6861fb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="number-circle-one-fill";
export const id="dl_bd9eeb23a9704e2c95bc";
export const url=new URL("../icons/number-circle-one-fill.svg?v=72d650812876c4175ed3075ef4d8ab259f719a3bda83ea97b190dc330e50432f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

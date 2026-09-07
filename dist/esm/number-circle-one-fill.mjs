export const name="number-circle-one-fill";
export const id="dl_bd9eeb23a9704e2c95bc";
export const url=new URL("../icons/number-circle-one-fill.svg?v=f44aa65863ed37df40119fcfe190d785fd3072e6165b3d67bf719cdee8cbfc41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

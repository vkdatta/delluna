export const name="align-center-vertical-simple-light";
export const id="dl_99da8429a21b439fa715";
export const url=new URL("../icons/align-center-vertical-simple-light.svg?v=6c3878706bc3447ba2309be81dedfb6627a0afde58b41b37a33d811f306edda5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heart-half-thin";
export const id="dl_23a6719c9d6d4609a9e6";
export const url=new URL("../icons/heart-half-thin.svg?v=35b8bec4a17df95654849df616962b661409f639147bdaf5eb3fdc56a03e68ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

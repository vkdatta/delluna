export const name="heart-half-light";
export const id="dl_e067b54456d946199150";
export const url=new URL("../icons/heart-half-light.svg?v=21d104ea61017387d6dc6cccc4b5a250e7bbabd7b64856d169a3cd01c84a06f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

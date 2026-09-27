export const name="4k_plus";
export const id="dl_3965d40a02c4143b52ac";
export const url=new URL("../icons/4k_plus.svg?v=6e885f0a80a22b8318061de3640a8913d36a93087381dd10043b65e80fd97412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

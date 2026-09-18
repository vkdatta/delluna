export const name="remote_gen";
export const id="dl_41a31d7436014890a316";
export const url=new URL("../icons/R/remote_gen.svg?v=232a4c0549a445baae45105a8a6f214e5221080855b45fdfafd04686c5148475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

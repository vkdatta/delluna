export const name="lucid_2-delete";
export const id="dl_fe21c95d493f4965aae3";
export const url=new URL("../icons/lucid_2-delete.svg?v=1fc9224d21ec75f8d7f1d076ca7ec486eafafb02dd198700a0bb48fcf1498c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

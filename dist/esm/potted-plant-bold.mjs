export const name="potted-plant-bold";
export const id="dl_4598c0322d524b74a4a4";
export const url=new URL("../icons/potted-plant-bold.svg?v=b786929510aa5c01fdc785c5462c4545b0e646b6da856824fe11b9ad84d52492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

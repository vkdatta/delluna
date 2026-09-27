export const name="arrow-square-out-thin";
export const id="dl_03ea858e8669403db58f";
export const url=new URL("../icons/arrow-square-out-thin.svg?v=de563ee33a6170195796ee337e41e74134a79fb695e77e56a8e3ee9d2fd3e3d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

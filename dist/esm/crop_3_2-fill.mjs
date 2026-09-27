export const name="crop_3_2-fill";
export const id="dl_e6dbad52ba6071178ce2";
export const url=new URL("../icons/crop_3_2-fill.svg?v=7ebaa77b39ec8308ac3cdde3ded4742d930bbcc290b88463ff75ec998c33e1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

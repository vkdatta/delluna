export const name="batch_prediction-fill";
export const id="dl_96da848d5b94eda8c1b8";
export const url=new URL("../icons/batch_prediction-fill.svg?v=76ce9dd534e8ccfa91ea69de445496564f631310695dbfd6dc413edc53b7c97d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

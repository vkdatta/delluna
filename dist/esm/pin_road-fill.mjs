export const name="pin_road-fill";
export const id="dl_450c4cbce51a4102a4fb";
export const url=new URL("../icons/pin_road-fill.svg?v=5818358657771e6c9e92076e0160d475f9c392494bb5f5753dab52d2f4adca78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

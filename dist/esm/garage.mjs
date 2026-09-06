export const name="garage";
export const id="dl_d4e4dbb509384d26a709";
export const url=new URL("../icons/garage.svg?v=cff727841f35fc579e1d86490f425851eae12379f6a247ddb75d6d133080fc77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

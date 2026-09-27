export const name="star-minus";
export const id="dl_2f6c318776704efc8630";
export const url=new URL("../icons/star-minus.svg?v=dbd48d27813cf782d8aa45766e0d62adf539b7763c7b4f2e0088132145e498d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

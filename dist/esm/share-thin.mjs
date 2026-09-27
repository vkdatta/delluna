export const name="share-thin";
export const id="dl_35eebf56433273895e49";
export const url=new URL("../icons/share-thin.svg?v=ce2378c43fa77b5cf082e9d42b745729c3fb040a2e45d4db56b1105b81bdac66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

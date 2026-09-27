export const name="donut_small";
export const id="dl_00e63490c4affb06123f";
export const url=new URL("../icons/donut_small.svg?v=2cbf0cb3dcc81bb2ce2354d1818a82b11b5a5333ad9b8630c95f8fbdf7e088af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

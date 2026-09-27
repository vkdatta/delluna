export const name="paint-brush";
export const id="dl_6b4c978c35184018a6a3";
export const url=new URL("../icons/paint-brush.svg?v=f1d46d75a440b583960bb12b5db8c0aad1333a0da6dd90035c91bf9d5f294e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

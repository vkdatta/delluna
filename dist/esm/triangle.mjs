export const name="triangle";
export const id="dl_089004979c8849ad90b9";
export const url=new URL("../icons/triangle.svg?v=c920f1045ea5879a75ee98e3f1c724932e082607e45887b3c55fa03ebcb9db5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="layers_clear-fill";
export const id="dl_a052b0d589514d43aa3e";
export const url=new URL("../icons/layers_clear-fill.svg?v=a348b04be700ac6a764c62702412bef395d211ed342a16d51fb9caa9cad3fcda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

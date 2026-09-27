export const name="lucid_3-pen";
export const id="dl_71d1e1637dc046669ef9";
export const url=new URL("../icons/lucid_3-pen.svg?v=fc5b8543a0361462f784873e8d83174a6d3c337b0e352022d837df681eee6963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

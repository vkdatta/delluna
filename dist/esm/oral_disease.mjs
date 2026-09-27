export const name="oral_disease";
export const id="dl_f731bcfcbe22ff62843d";
export const url=new URL("../icons/oral_disease.svg?v=315847c1b7254ae5536f62114d93757dd92850b83d301716b5a7b33eda7492f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

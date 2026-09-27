export const name="deployed_code_alert";
export const id="dl_b4b1867909a821475370";
export const url=new URL("../icons/deployed_code_alert.svg?v=d3a5810305b28fe7f1a828c5766ff0ff1414403b472c14368e9a67359442948e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

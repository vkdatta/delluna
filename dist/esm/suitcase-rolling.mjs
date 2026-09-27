export const name="suitcase-rolling";
export const id="dl_981ab97c4edf5a6c250b";
export const url=new URL("../icons/suitcase-rolling.svg?v=2b272317ffce4c7ea570026cd335d2486264cc883953ce187a772a85e6446104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

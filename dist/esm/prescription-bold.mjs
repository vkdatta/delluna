export const name="prescription-bold";
export const id="dl_0f403a71ea684ad4aa7d";
export const url=new URL("../icons/prescription-bold.svg?v=edfc4bb520ab8f6f40d8f4468dfa9181a55eabc764282912a45cb20af2ee5990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

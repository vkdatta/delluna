export const name="scan-bold";
export const id="dl_f55c1a8a1a246d532696";
export const url=new URL("../icons/scan-bold.svg?v=1adf76f0f99f66757fe7f4c56fa265fac076e9532efc425fac6cd29b57c7e15e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

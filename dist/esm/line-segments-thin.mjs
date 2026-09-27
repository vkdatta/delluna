export const name="line-segments-thin";
export const id="dl_afcc121d35184a0984d7";
export const url=new URL("../icons/line-segments-thin.svg?v=1c3e575fc2937d7e0ed867547c289a77324082d1af54435ea2a1db2457400212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

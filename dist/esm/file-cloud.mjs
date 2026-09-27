export const name="file-cloud";
export const id="dl_379b64b0a3c845c189e6";
export const url=new URL("../icons/file-cloud.svg?v=6a1d0916f92979cf2f5ce7ea955a259105de3af621a2a65868238453435d92ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

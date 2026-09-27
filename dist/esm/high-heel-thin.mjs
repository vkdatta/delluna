export const name="high-heel-thin";
export const id="dl_e6a36290987c4fbb9b20";
export const url=new URL("../icons/high-heel-thin.svg?v=18f49ef1d05f3b3cbf851bd6606df4ac2423d13c128da076e736e7c2fc94bf79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="microphone-stage-bold";
export const id="dl_800394a330f44ff8876d";
export const url=new URL("../icons/microphone-stage-bold.svg?v=4d68b0c582bd1885ac89c384e677adcbb67a55b174aad82b5d3a89446c5e0659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

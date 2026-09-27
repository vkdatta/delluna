export const name="caret-circle-up-thin";
export const id="dl_6bd4e2c314744748ab4d";
export const url=new URL("../icons/caret-circle-up-thin.svg?v=0542604d2dcd0f57f4f7c116d9df78aa448f26e20fe66622ca3266d3ae6e4e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

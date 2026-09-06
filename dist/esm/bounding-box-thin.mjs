export const name="bounding-box-thin";
export const id="dl_5ec530a693a54582976d";
export const url=new URL("../icons/bounding-box-thin.svg?v=9c079a98edfbcef9266f8543c080b674c0e3f716501b30d6312f2f439b2a07f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

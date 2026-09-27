export const name="spinner-ball";
export const id="dl_8c51adb85d3f853582e7";
export const url=new URL("../icons/spinner-ball.svg?v=1c97ab3a1322619fee718299e368b6ea79a376be8d21cad8787b9b6505691755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="waves-light";
export const id="dl_40d67861fd343ccd0f38";
export const url=new URL("../icons/waves-light.svg?v=d8a2b3fefd2ed0528e1c7a9127bc62aed41cac23e90b6a43159e24b6b4eb9b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="camera-fill";
export const id="dl_797324c779da47ba998b";
export const url=new URL("../icons/camera-fill.svg?v=cb78e42b5143dd8d315da12b9773138a6941891a93f202c253e851cf7481748c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

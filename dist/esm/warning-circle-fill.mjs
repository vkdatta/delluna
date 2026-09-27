export const name="warning-circle-fill";
export const id="dl_63aaae290eb0a77bf311";
export const url=new URL("../icons/warning-circle-fill.svg?v=4ec606923fc118ee37384b8597cf5feab26579447e6f85ac6ce57e5d75df4186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

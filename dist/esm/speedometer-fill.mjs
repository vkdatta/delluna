export const name="speedometer-fill";
export const id="dl_854d1ff5ff0142418c00";
export const url=new URL("../icons/S/speedometer-fill.svg?v=4c7bde039d765b09c8212e904efd72ced83e30fd7927cc9bfe1436a629a81ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

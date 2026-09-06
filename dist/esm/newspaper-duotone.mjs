export const name="newspaper-duotone";
export const id="dl_9ab64698680849faa5ca";
export const url=new URL("../icons/newspaper-duotone.svg?v=dfca2a911dee7a43b71df373f18799fddb2f143475b5ac15229bfd21786e97cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

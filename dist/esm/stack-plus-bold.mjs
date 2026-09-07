export const name="stack-plus-bold";
export const id="dl_e9b21c8c3f58407ab52d";
export const url=new URL("../icons/S/stack-plus-bold.svg?v=ee84334c5500adbfde5789559054c015114b01154b9ffc4ae600e45abb830a43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

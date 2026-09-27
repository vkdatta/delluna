export const name="tray-arrow-down";
export const id="dl_002e76bfaf1e11f9e70f";
export const url=new URL("../icons/tray-arrow-down.svg?v=bd2f01d736526e50eb7069d6c61b5d42f5f1be263e65ac98da82621286e9a3b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

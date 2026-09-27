export const name="gps-fix-bold";
export const id="dl_21c0291c0f6d4981acce";
export const url=new URL("../icons/gps-fix-bold.svg?v=a65d10ead09daa638f7609bc5b4ad8e9d628330ce7eefff5687a5c5a86cafb66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="folder_zip-fill";
export const id="dl_5949ad8ed3c7122e0c0c";
export const url=new URL("../icons/folder_zip-fill.svg?v=ccccf10e7a7d68621f83e79d732697ac6768b3fc001a8d58af45c5440cd24c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

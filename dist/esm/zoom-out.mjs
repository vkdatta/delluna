export const name="zoom-out";
export const id="dl_9a9dfb683b3d4611affb";
export const url=new URL("../icons/zoom-out.svg?v=280690907b7001f06d7d45eb4f0a4cb090838bf9e96d30ec8bdb21668cf3a6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="laptop_windows";
export const id="dl_fcb7cc01a572f662a8f7";
export const url=new URL("../icons/laptop_windows.svg?v=77ce2948b646af896fbe316859ae7f8b0e31c0642a7d870af27934356234b3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

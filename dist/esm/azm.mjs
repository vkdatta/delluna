export const name="azm";
export const id="dl_0c92e9df84b922e51e88";
export const url=new URL("../icons/azm.svg?v=a4edf6b5fe45a0cdc6eacb52bd2ad8d5820818e5fa9af8fb326e60549d2777c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

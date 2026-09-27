export const name="range_hood-fill";
export const id="dl_d343d1a8f3cc6371e929";
export const url=new URL("../icons/range_hood-fill.svg?v=7f5bb8485e5095223f2b05b9ad6820a43e9b7aabc2c5901f1342d9268778a35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

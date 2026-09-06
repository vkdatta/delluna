export const name="drop-slash";
export const id="dl_9697f5f089e5420b9239";
export const url=new URL("../icons/drop-slash.svg?v=a92a0aca61427bbdca7c1a43ae953522c100f3fd891ca6da73ed951fc4620385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

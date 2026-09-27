export const name="cardiology-fill";
export const id="dl_db7f7e6f70dcb4a52603";
export const url=new URL("../icons/cardiology-fill.svg?v=c67d532abf24a40fb504c08c0d78f3d297e5cf883f705d2295ceb5e95d4f2ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

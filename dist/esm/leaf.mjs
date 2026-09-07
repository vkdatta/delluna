export const name="leaf";
export const id="dl_260482e3c3d842d78098";
export const url=new URL("../icons/leaf.svg?v=688976d4921d67d44b766542d36c4d20f553babaf74db8e43f4ef012e658d884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

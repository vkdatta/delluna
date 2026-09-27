export const name="cloud_circle";
export const id="dl_b544600dbdc98e57c662";
export const url=new URL("../icons/cloud_circle.svg?v=3bf859c6af7b9149194d2056be8d651d63d050de0842761a47917cdad79864d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

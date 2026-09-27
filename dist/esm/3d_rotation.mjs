export const name="3d_rotation";
export const id="dl_17a3179653899d31adb6";
export const url=new URL("../icons/3d_rotation.svg?v=031d794ecf7e54e615ba9629954fa1696a0c5d8b82e0eaf0393a9682721c9dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

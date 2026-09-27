export const name="rear_camera";
export const id="dl_609f7b87579447c66447";
export const url=new URL("../icons/rear_camera.svg?v=6430f8755c2a5f293310d42ad914bdaaba1ff2a0cda2f454feaab35c63e364c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

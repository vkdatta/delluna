export const name="bottom_drawer";
export const id="dl_86ae2f0ea33b79efecda";
export const url=new URL("../icons/bottom_drawer.svg?v=85661fb6a0662a7ff709532c6c67876dcf2c1c7898a2ef246676c15a23032adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

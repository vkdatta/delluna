export const name="mouse-simple";
export const id="dl_e02f1692478d497ebfb7";
export const url=new URL("../icons/mouse-simple.svg?v=27e37230f1532e1945fb5c6ab2bb8bcbaa5070012b45c52f4c028247279142bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

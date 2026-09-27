export const name="circle-notch-fill";
export const id="dl_53a0702b16924f05bb3d";
export const url=new URL("../icons/circle-notch-fill.svg?v=59ae6c6a33bdb30cea18d66663a2d4fa2659ba2b2eb1233090e96e888b40d2cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

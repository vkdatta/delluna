export const name="soccer-ball-light";
export const id="dl_96b232e059cc47a0b3a5";
export const url=new URL("../icons/S/soccer-ball-light.svg?v=4664523bfcb02f079651d1bb1634c43e3d33409dd8723566c51a5759dfdf42f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

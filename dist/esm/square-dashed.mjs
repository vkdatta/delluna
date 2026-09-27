export const name="square-dashed";
export const id="dl_24485bd7bee04f51a1f9";
export const url=new URL("../icons/square-dashed.svg?v=2d9520d195a7204bea21f7c36769474bce57abb3f7b445b3574ede645e6d3d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

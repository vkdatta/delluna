export const name="eject-light";
export const id="dl_710e9692ada148689cad";
export const url=new URL("../icons/eject-light.svg?v=d0f9b22cc000f1263f7463d75a2d60a70696063a39a6dc59c7d5070117f56399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

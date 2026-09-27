export const name="turtle";
export const id="dl_b8bf166d818847da97b0";
export const url=new URL("../icons/turtle.svg?v=86d0e392bc24a8bdb647586b8f6dff7aa4bc40fac80902e0817a41993d086700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

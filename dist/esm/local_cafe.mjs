export const name="local_cafe";
export const id="dl_907719ffe31e4014bb1c";
export const url=new URL("../icons/L/local_cafe.svg?v=5fa93e008b1e5b3afe2aeca489992a3fc84c99a8bef1cfd935a92ac899e299b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hexagon-light";
export const id="dl_95316994c5764d228420";
export const url=new URL("../icons/hexagon-light.svg?v=cfca3d69c014361b8825e2241a74b7fb1926d1865b5cd282b8eedde9f97e66a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

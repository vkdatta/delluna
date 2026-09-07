export const name="hexagon-light";
export const id="dl_95316994c5764d228420";
export const url=new URL("../icons/hexagon-light.svg?v=49b8cc596dd297d53ba2e4dc671ab460b0de2c6be8aecdc3ca45a06ede1d78df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

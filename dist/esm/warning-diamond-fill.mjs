export const name="warning-diamond-fill";
export const id="dl_7115aa071499b3d9630f";
export const url=new URL("../icons/warning-diamond-fill.svg?v=62d68831bc9d376312a520532ce883dad3fe7aa6e556710d566c56c22ecd2cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

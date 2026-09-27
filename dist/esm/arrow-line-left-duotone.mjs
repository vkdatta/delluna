export const name="arrow-line-left-duotone";
export const id="dl_8627da9054a34f49bfbd";
export const url=new URL("../icons/arrow-line-left-duotone.svg?v=609d3a3d587844b2ecd0c0142072009e77753a6a8087158e37da7c8bb93901d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

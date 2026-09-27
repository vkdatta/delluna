export const name="dehaze-fill";
export const id="dl_b7cdb5b42f742cfe1300";
export const url=new URL("../icons/dehaze-fill.svg?v=e0a428f1196b97ef523e6b095612f55c6b3860304c6c8ebfca36da8442e51e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

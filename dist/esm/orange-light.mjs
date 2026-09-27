export const name="orange-light";
export const id="dl_a87663a47dd74af2a7d8";
export const url=new URL("../icons/orange-light.svg?v=e073d1e3d2a37991fceb33eaf2f7a4467e26d5a0dd82f8aba97269b06ad61d88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

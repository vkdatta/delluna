export const name="image-light";
export const id="dl_2b4d81a1476c458fbc24";
export const url=new URL("../icons/image-light.svg?v=c2e22793f5335205c626a87f5911dc849f5f17b662e31d7bd3c55c183eb458d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

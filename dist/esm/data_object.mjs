export const name="data_object";
export const id="dl_cc542f674ea1e6046303";
export const url=new URL("../icons/data_object.svg?v=e6c0a2fe547e10a453a7c023e69ea04f276cc72054ac02727f5cc3c2ffe4b788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

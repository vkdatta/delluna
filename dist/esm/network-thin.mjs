export const name="network-thin";
export const id="dl_772f66090b364fc5b0b6";
export const url=new URL("../icons/network-thin.svg?v=608069d352baacb601033235c88a2d558a34041abddd6aa1ee8a4c75e82325fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

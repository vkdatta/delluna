export const name="high-heel-light";
export const id="dl_a5452f4fc3594303a534";
export const url=new URL("../icons/high-heel-light.svg?v=f0d4fe60cc508221cfa72a3fa38b9637acc4c0fc9721ebfb71ae220a04f21e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="sun-horizon-fill";
export const id="dl_401c80c6f1e897ce1612";
export const url=new URL("../icons/sun-horizon-fill.svg?v=daf2666da7f0f05fe4495ec5574ad6da42ed616d0bca59195593b87d56459093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

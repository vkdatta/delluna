export const name="podium-fill";
export const id="dl_ae3a05844c7fc4b47dd1";
export const url=new URL("../icons/podium-fill.svg?v=2d22b8d2d582dee10128f4284dc0d92babab4d981d6f6c6013f0e5c29826f779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

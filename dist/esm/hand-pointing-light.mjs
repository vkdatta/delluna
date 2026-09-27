export const name="hand-pointing-light";
export const id="dl_739685b14bfa410a92a1";
export const url=new URL("../icons/hand-pointing-light.svg?v=ce3f7643ac47154fc9841ae9ab918b4788409632acf803c959a78d81679ed121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

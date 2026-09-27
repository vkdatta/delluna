export const name="file-text-bold";
export const id="dl_d09734bff25d4d19bacd";
export const url=new URL("../icons/file-text-bold.svg?v=2cc3d1769000197f2d877bf539cc4d832da8bd8b4d8cfd5a949098610551acfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

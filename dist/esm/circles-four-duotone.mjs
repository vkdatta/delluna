export const name="circles-four-duotone";
export const id="dl_87a3030ff045473e9e9e";
export const url=new URL("../icons/circles-four-duotone.svg?v=d0f06ccd177b474688303bb49eae7ee20b3acb0bffbe2d876eee8f8ccc411775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

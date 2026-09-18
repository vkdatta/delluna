export const name="panorama_vertical";
export const id="dl_69bb8c9d589c426a845d";
export const url=new URL("../icons/panorama_vertical.svg?v=64c2a4f5715688d7c948f510cf00fe6c5e5655558dbb617c4497170683e9d138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

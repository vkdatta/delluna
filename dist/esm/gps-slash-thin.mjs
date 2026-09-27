export const name="gps-slash-thin";
export const id="dl_3d3eae54461c401c902f";
export const url=new URL("../icons/gps-slash-thin.svg?v=3beeb1301b0563e3d688a9af2999c6da8d187f6cf782480e9b6046810fbfb828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

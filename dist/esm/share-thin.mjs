export const name="share-thin";
export const id="dl_d3304d65a6274b099bb6";
export const url=new URL("../icons/S/share-thin.svg?v=73203e7cc8f4e51e91693ed43a5d7c6240db02a485f77331b961e48ac902eb44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

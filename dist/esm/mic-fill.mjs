export const name="mic-fill";
export const id="dl_3db75e06a67fcfb2b09d";
export const url=new URL("../icons/mic-fill.svg?v=d649e00ba1467e8aafd7a9aa2a31085d9400aeb717ccef149a074f42f46e6793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

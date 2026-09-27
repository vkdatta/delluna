export const name="line_start_circle";
export const id="dl_fd524346df08d33b2f9d";
export const url=new URL("../icons/line_start_circle.svg?v=7ea8a7ffb06b4fed4c411f1286c1b7ea421884794228a30cabcfb024160b0e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

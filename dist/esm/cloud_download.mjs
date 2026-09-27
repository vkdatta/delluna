export const name="cloud_download";
export const id="dl_b63015a856e505e21595";
export const url=new URL("../icons/cloud_download.svg?v=77dc4eec6503946ff527cd52705a68b28177c2284fec0149ba122cbb7408ba18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

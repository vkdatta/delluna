export const name="tilt_arrow_up";
export const id="dl_519ba9dc09091935c314";
export const url=new URL("../icons/tilt_arrow_up.svg?v=e53973ba7e36ab049394901bbd6fed0e948cd02e11c00cfd3335a98826283337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

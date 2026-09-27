export const name="watch-light";
export const id="dl_3d1e881e299cc2d294d4";
export const url=new URL("../icons/watch-light.svg?v=2f1c6d099b5816d765d1623634cb97067cefbc2b03c4e67952aafe3e2c96054b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mobile_dots";
export const id="dl_3e3d1f35bd434f2e9886";
export const url=new URL("../icons/M/mobile_dots.svg?v=d00e1f00b5d1a6d4cd9c863cc8c71ee1b84ba273afd75054b41e68731d124bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="build_circle";
export const id="dl_dd765a94ea741e78422b";
export const url=new URL("../icons/build_circle.svg?v=98d611276b6035d6b113dda5d0ce69ea53c7191318991ed2ca2a0e872eefe478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

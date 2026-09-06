export const name="arrow-square-in-thin";
export const id="dl_a220c071531941fbaefc";
export const url=new URL("../icons/arrow-square-in-thin.svg?v=7a3780d11c62d4b3048b8f8b120c0bf4ab311a64c8369f642bb3a3c1a6fd8147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

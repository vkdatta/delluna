export const name="crop_square-fill";
export const id="dl_aebf6e007a39d51eca76";
export const url=new URL("../icons/crop_square-fill.svg?v=201038e9c86588ab1014942a1be9a50ec27cd2ddc02dd1c1807afd3313ee2eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

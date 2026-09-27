export const name="crop_square";
export const id="dl_ea7ed4ca3181da434101";
export const url=new URL("../icons/crop_square.svg?v=c378818415132601879905e1c9389412501b13c84bbd6180d1c0d602482e52c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

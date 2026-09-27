export const name="face-mask-fill";
export const id="dl_1b5ba973d4ab45f0b13e";
export const url=new URL("../icons/face-mask-fill.svg?v=61ea1ace9193039665b215c9559a2290e4cdc57d7af82fd4deefa4a250a54288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

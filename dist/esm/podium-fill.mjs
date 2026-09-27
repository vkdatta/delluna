export const name="podium-fill";
export const id="dl_2fbd7b210c32b255094b";
export const url=new URL("../icons/podium-fill.svg?v=b60185881b07f9b9a6a101be68c9969a863c49d160bebf5b359497c99d65218f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

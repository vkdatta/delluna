export const name="lucid_3-server";
export const id="dl_4bf1c2910add4c23a4b7";
export const url=new URL("../icons/lucid_3-server.svg?v=03868493f85f49a192ca3ddb723a559b75ea13d3b41529d2865cb901f844b0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

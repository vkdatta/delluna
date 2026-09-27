export const name="pan_tool";
export const id="dl_35b9d281653d7934a92d";
export const url=new URL("../icons/pan_tool.svg?v=4414f5f3e3cbd1a27bc884847e8a4cb93de34b3d533764671f4110c43ebe5c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

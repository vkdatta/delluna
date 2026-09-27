export const name="speed_1_2x";
export const id="dl_e5ac3661fa396707fc7b";
export const url=new URL("../icons/speed_1_2x.svg?v=96c6db151628022a55c8f8b16b60db2d61981bad788f93321ec88bb5ac7037a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

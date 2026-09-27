export const name="crop_2_3";
export const id="dl_f08e02fe73e263f068ef";
export const url=new URL("../icons/crop_2_3.svg?v=fb32b061f4bb5eef8d8ed0f8831ad1dbc8d67ba179339c02960e1131e1ba9e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

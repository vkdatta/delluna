export const name="crop_3_2";
export const id="dl_2f95d060059765349c3d";
export const url=new URL("../icons/crop_3_2.svg?v=0f9fc75467279350b50e9f7279a9aa6c57e980989a780c777aee8a76f073b77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

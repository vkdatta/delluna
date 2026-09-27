export const name="keep-fill";
export const id="dl_d26383d4f9e45fd54390";
export const url=new URL("../icons/keep-fill.svg?v=8797a687233cf2bf54c7bc8d437828d318b123281e4d31ea5b0665a13074be00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

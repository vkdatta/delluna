export const name="amp_stories-fill";
export const id="dl_d08ac77d5f2cd80d5d66";
export const url=new URL("../icons/amp_stories-fill.svg?v=0c8342d060a88bdee35dfc453bb7818d6f953c8dbebd4d2656f00ef49879aa60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="crop_portrait";
export const id="dl_c5ab9af4a50e409996d1";
export const url=new URL("../icons/crop_portrait.svg?v=9058b9d1c99bb78fb9e532a06e445e8f09992602802c7fa5bee57a515f728f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="people_size_increase-fill";
export const id="dl_8c7683348665a9e41377";
export const url=new URL("../icons/people_size_increase-fill.svg?v=ef212ae5592858bb6aaa2b6d966df3e49f75bb12784c2fea19a1f1057012c775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="label-fill";
export const id="dl_7117c09086c73fe34413";
export const url=new URL("../icons/label-fill.svg?v=17d62471d8586d6bf836e72a0a462bbfed223a4aaa6d62fba1ae5b059ddb18ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

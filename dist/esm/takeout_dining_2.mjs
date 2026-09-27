export const name="takeout_dining_2";
export const id="dl_8e1cb18eb5e9b6d64b7f";
export const url=new URL("../icons/takeout_dining_2.svg?v=3fe8c095471d5a9b66cf6fdd6d05eaf397106ddee80a2acc3f2f7b4d4d50ab27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="app_badging-fill";
export const id="dl_816b36f145867e8f577c";
export const url=new URL("../icons/app_badging-fill.svg?v=a99967750303cb4af500e202ed324c10ee9a9fe2b9f3410b784792ce1c8c8afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

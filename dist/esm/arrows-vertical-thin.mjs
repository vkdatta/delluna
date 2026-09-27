export const name="arrows-vertical-thin";
export const id="dl_5c279a302719432bbeb2";
export const url=new URL("../icons/arrows-vertical-thin.svg?v=b51665a605c028f2d9d787a05ee809836d233d2919f3f125f07c19c6873ba2de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="fit_screen-fill";
export const id="dl_f3723d6cc4e6231e36dd";
export const url=new URL("../icons/fit_screen-fill.svg?v=973ba422d6f28f6bbd5ec7447919600358707dc374740b723370c5aba094763c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

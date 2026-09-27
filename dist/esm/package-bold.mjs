export const name="package-bold";
export const id="dl_558cc23bab7441e79a3b";
export const url=new URL("../icons/package-bold.svg?v=f78f510dc789707f24a7ebbb5c267a251dd60f953d8553de1117bbd6e210f561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

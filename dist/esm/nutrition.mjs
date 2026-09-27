export const name="nutrition";
export const id="dl_8785752dc36533ad8ed8";
export const url=new URL("../icons/nutrition.svg?v=343c01764990676c22c1bf5a31ae8009438cb4c1bb54d9ae989a8bd919981fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

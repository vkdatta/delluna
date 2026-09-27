export const name="archive-light";
export const id="dl_81cea3f28d0a49218f59";
export const url=new URL("../icons/archive-light.svg?v=c9f1be6635b6c00b80a0de77767029c16d1b25d21a9bc32b0f9742ceb1c204ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

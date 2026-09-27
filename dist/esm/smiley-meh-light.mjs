export const name="smiley-meh-light";
export const id="dl_e656da43f8d0f0b0ea41";
export const url=new URL("../icons/smiley-meh-light.svg?v=e4b70cee273fc75265eeada8f3088084e41fe48831447f3084eb0f5815b8bcfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

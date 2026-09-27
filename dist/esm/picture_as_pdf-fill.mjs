export const name="picture_as_pdf-fill";
export const id="dl_fde45102625eecb0d4df";
export const url=new URL("../icons/picture_as_pdf-fill.svg?v=21b4579c094a499e6f59d35060a5b4b6589eb8810028cb6808599241c43fcf65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

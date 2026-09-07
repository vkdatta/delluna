export const name="stairs-light";
export const id="dl_ceb572dffd6a49b59938";
export const url=new URL("../icons/S/stairs-light.svg?v=4f82b4eaf8bab57663aa4a4aa4f4b67b0317602108388129c909f80c9b637f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

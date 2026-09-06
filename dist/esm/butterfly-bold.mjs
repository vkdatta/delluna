export const name="butterfly-bold";
export const id="dl_a082f220f83c4f5b914f";
export const url=new URL("../icons/butterfly-bold.svg?v=32c345c9304ae8cffce505ec155123a6f6c2ec00efa580e500b4e7bc8874360c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

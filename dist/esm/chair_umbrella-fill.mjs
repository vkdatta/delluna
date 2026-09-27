export const name="chair_umbrella-fill";
export const id="dl_39ff2f3fd8c805236146";
export const url=new URL("../icons/chair_umbrella-fill.svg?v=f135d352f55f1947c3c6e007af4e217b4ad9dae72557e2fc644e3fd0d5b6add7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

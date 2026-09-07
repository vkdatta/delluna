export const name="basketball";
export const id="dl_c1c8a9a3b0264b5a93f1";
export const url=new URL("../icons/basketball.svg?v=39de5332a88b6ab8899e6f8c6ba62b792c77a406c31cd9c44d18ee95784f49f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

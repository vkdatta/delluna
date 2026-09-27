export const name="unite-square-bold";
export const id="dl_7305b4664f18be8f11ff";
export const url=new URL("../icons/unite-square-bold.svg?v=dc1c6af54464722ba1922b472d3559ccbb7b48ae1a7713eadd9b55acd5e4a64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

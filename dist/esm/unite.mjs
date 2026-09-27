export const name="unite";
export const id="dl_7e8d7e946cef49dae70e";
export const url=new URL("../icons/unite.svg?v=71378ac00e05e9e3fd5fa240fd7109d04bf7b329f4c0fe0f660c509e8d42c237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

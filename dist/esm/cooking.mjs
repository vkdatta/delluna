export const name="cooking";
export const id="dl_5ea20da9098cfb6592f0";
export const url=new URL("../icons/cooking.svg?v=144d82cf58820ab8937404a805049078233b7f89a3eda4130ec67bab79ad023b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

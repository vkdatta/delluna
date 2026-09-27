export const name="square-logo-fill";
export const id="dl_db5fa9049cdb799cffe8";
export const url=new URL("../icons/square-logo-fill.svg?v=e1822998ad792c1aedf3ca512a797d8026d5ad01df7f2f1a92538d22866f631d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rocket_launch-fill";
export const id="dl_cc9bdff0e4f64c82b637";
export const url=new URL("../icons/R/rocket_launch-fill.svg?v=3fff6c249a77de5c6f85a89faa15d1e2ded72bfb5b4d922b26cf208c148aa567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

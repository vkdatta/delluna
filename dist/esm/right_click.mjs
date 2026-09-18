export const name="right_click";
export const id="dl_04eef924be80448d8dcf";
export const url=new URL("../icons/R/right_click.svg?v=eb2873dde0a5d2c4047aaab2dd5a22931bed93e319e670ecf750d016c69d9822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

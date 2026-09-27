export const name="percent-thin";
export const id="dl_1ad03125da5940b793b4";
export const url=new URL("../icons/percent-thin.svg?v=36791f3771a7e55ad5ad58b79e383f1bd368c01bb290882c184c91985ffb1840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

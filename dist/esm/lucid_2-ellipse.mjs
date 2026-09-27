export const name="lucid_2-ellipse";
export const id="dl_2feadfea66b941a6a9eb";
export const url=new URL("../icons/lucid_2-ellipse.svg?v=177969b91f248558d180ae35e6623861c394486b78d7cb087dd26441d9fa2e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="database-fill";
export const id="dl_22af0dddb2ad4a4c9a43";
export const url=new URL("../icons/database-fill.svg?v=3b7b2e16536b9f7df279f2dc6d3fe936448660c6bbd626a046225621501d8acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="boxing-glove-thin";
export const id="dl_28bfe064fe4b44648c69";
export const url=new URL("../icons/boxing-glove-thin.svg?v=31e5c762e45519b12258f1fac73d0ab5cfd0dd8b9e2bdc9b91a7024e3eddbd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="paste";
export const id="dl_445434bff2fc67acf7e7";
export const url=new URL("../icons/paste.svg?v=630ee6f5080013c4e927c35b6da09e4754a93dfc82688e8cfd535ced49562b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

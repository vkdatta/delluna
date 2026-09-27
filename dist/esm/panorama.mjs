export const name="panorama";
export const id="dl_1d3021917af442cd85af";
export const url=new URL("../icons/panorama.svg?v=db4bcf776f490356a40f5a3861c6af310a313b07e9a01185965ea2adfbcb9d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

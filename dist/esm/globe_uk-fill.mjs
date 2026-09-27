export const name="globe_uk-fill";
export const id="dl_2d2230e8bd0352d95198";
export const url=new URL("../icons/globe_uk-fill.svg?v=f6d7c5b19921a4257f1c5d0c049652cd8d70b99642c92c9d241c89b5afaa3d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

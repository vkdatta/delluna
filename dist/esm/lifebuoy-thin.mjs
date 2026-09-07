export const name="lifebuoy-thin";
export const id="dl_7bb01f1a43414ad89ff9";
export const url=new URL("../icons/lifebuoy-thin.svg?v=9e6783aa232446db7f7b2631d8a77c90ffac9e417a4dfbac3cd03c9281498b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

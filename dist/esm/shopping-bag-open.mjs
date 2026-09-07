export const name="shopping-bag-open";
export const id="dl_21057dd04a2a45d3a763";
export const url=new URL("../icons/S/shopping-bag-open.svg?v=cfabebbd7ad174ec5f305d0774ade81fe7a8a69f6ae5bd45003d240589776e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

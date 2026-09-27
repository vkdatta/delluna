export const name="shopping-bag-open";
export const id="dl_12a9a7d1adff16fd3910";
export const url=new URL("../icons/shopping-bag-open.svg?v=cfabebbd7ad174ec5f305d0774ade81fe7a8a69f6ae5bd45003d240589776e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="newsmode";
export const id="dl_818a7b1892f7c2344bd7";
export const url=new URL("../icons/newsmode.svg?v=e6d85c3fa79ef73f00ca58e55639491ccda73c6be58942dc3150f69e32cea0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

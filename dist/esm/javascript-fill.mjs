export const name="javascript-fill";
export const id="dl_c01efa8c6f6546fe88c5";
export const url=new URL("../icons/J/javascript-fill.svg?v=918c63467f839525c1e97a7aa670c19e7397aa40d082d97dbb5c36f73059488f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

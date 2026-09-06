export const name="lasso-light";
export const id="dl_cb62e8cabfe947dd9b0b";
export const url=new URL("../icons/lasso-light.svg?v=401565ebf7be429347a1f9b9f7c56beb5325ce5909b6488b7e5f85ce5f862138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="books-fill";
export const id="dl_5fb3fa5593f84d4eb39e";
export const url=new URL("../icons/books-fill.svg?v=77206a2059d858c451f93e1298148588ad91919105d3154929eb13621960955f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

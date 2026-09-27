export const name="compass-rose-bold";
export const id="dl_e1f8e451a4bf4e3f9677";
export const url=new URL("../icons/compass-rose-bold.svg?v=2a817a83078f59ed32a18c998bbf8069cf4193eb8e130c5b630908fbd73ce74b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

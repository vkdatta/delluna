export const name="no_drinks-fill";
export const id="dl_88ad0f858de44de5b450";
export const url=new URL("../icons/no_drinks-fill.svg?v=a52aa8afc70b8ce2bad79f35440f9cc1406e19fbe745292d17e572799bcea5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

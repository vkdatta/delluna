export const name="tune-fill";
export const id="dl_64964f8eef0cae44d551";
export const url=new URL("../icons/tune-fill.svg?v=632b9f336caafd27063e10df2492ca3e689626886050c40f5a53856c863a70bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

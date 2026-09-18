export const name="tab_new_right-fill";
export const id="dl_7073a1089d21467dbe9b";
export const url=new URL("../icons/T/tab_new_right-fill.svg?v=c05bcb32d7c7e7a4cde60226d7887314cb7674a79d94ddc96b76deca8939f877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

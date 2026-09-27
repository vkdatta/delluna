export const name="no_luggage";
export const id="dl_0aaf13d5375ddd3030e0";
export const url=new URL("../icons/no_luggage.svg?v=a51ebfb6667671a6da75675aae685dc9975440be1050440236f46bbbc75248ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

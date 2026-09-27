export const name="octagon-bold";
export const id="dl_19d58ed8a3514ef5827c";
export const url=new URL("../icons/octagon-bold.svg?v=c3bf521a17c757e28ff45188044e7a26aa65e68b4d294c358fda7a319b92971d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

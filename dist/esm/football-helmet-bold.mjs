export const name="football-helmet-bold";
export const id="dl_c48c02a370d2413890f1";
export const url=new URL("../icons/football-helmet-bold.svg?v=a8e41c1513845d16fc9e4cf0fcbe9001e43c83b6817d651431ba3552b21de27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

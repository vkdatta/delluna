export const name="circle_circle-fill";
export const id="dl_958efdc7d7b8438ba1b6";
export const url=new URL("../icons/C/circle_circle-fill.svg?v=a31cc94e50970fa491d70b8618eebe702e30d1ada457ae4611914e384ea1269b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

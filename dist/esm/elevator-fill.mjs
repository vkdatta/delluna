export const name="elevator-fill";
export const id="dl_6f24a93d347f41428250";
export const url=new URL("../icons/E/elevator-fill.svg?v=a4505f4def8c96453cc414fb3af8f82d2d30ceebf93b748a0775c1f2f2d5745b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

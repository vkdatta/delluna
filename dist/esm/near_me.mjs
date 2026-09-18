export const name="near_me";
export const id="dl_381077b15ab14fceb2f2";
export const url=new URL("../icons/N/near_me.svg?v=162882a23d35e50be28930272208604342b97e96bcb46c652882ed82dbd424d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

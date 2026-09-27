export const name="triangle-duotone";
export const id="dl_49acec35d3edaf081345";
export const url=new URL("../icons/triangle-duotone.svg?v=c52cb5dc7339e1d06978b5f259161c5a11aa26a54cd4f5b72f08db930dd70c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

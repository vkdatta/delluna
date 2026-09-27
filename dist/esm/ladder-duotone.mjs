export const name="ladder-duotone";
export const id="dl_5ed6d3b55ec947219f2f";
export const url=new URL("../icons/ladder-duotone.svg?v=e6d8cac977e6d547fd7e2220dd1baf96839bfe83290b425bfd761d51e9bbd146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

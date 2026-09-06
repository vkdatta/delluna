export const name="circles-four-duotone";
export const id="dl_87a3030ff045473e9e9e";
export const url=new URL("../icons/circles-four-duotone.svg?v=12d6f4973b53292136e42377a0ec9ee5678a86f6d7d752bb367a7103f58d003b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

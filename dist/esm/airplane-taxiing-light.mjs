export const name="airplane-taxiing-light";
export const id="dl_bff0c2f502fd49ab8b76";
export const url=new URL("../icons/airplane-taxiing-light.svg?v=2905ffcc5078291a5f6e8370188e02fc5b8c238649f7bbd5a5713c0e2b92ac13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

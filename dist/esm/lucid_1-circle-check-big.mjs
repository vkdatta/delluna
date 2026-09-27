export const name="lucid_1-circle-check-big";
export const id="dl_bf3701dad76147bc9387";
export const url=new URL("../icons/lucid_1-circle-check-big.svg?v=a29cbe39d869537a1e03fd1e93ce8c62bb6c361decef7be04ed53d106f92fa9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

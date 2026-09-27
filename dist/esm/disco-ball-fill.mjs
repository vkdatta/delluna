export const name="disco-ball-fill";
export const id="dl_365aff86927e4bad8f91";
export const url=new URL("../icons/disco-ball-fill.svg?v=b50c95bf8b697d87626bc06d30b3493fc6abc4fc5b34fa661181fbfdb9da315f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

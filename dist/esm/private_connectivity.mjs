export const name="private_connectivity";
export const id="dl_8011112ed596bd996168";
export const url=new URL("../icons/private_connectivity.svg?v=c21b5aade00fb92fcf674b8cdd542adc48a29c5be10b624ea8229b55c23af12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

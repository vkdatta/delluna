export const name="align-bottom-thin";
export const id="dl_a7c786d0797a4d6fa1fd";
export const url=new URL("../icons/align-bottom-thin.svg?v=891a5ec2f7f60be96c346aa1bab963ad3c843acc73678a1cd68116468d425c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-dog";
export const id="dl_86933778e5c2462ebfe4";
export const url=new URL("../icons/lucid_2-dog.svg?v=e85496f2919791ee5d8d9641021643189ff8f8ee7af1b640a1de1dbcbfbcd474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shield-chevron-duotone";
export const id="dl_4c60514f3a6c8d036ffa";
export const url=new URL("../icons/shield-chevron-duotone.svg?v=7b59367d2863f585ab5e44c123a511a07a7a6394c82d5e9c68780fffc2783bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

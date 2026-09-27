export const name="chair_umbrella-fill";
export const id="dl_a5828897a80a1751e2ba";
export const url=new URL("../icons/chair_umbrella-fill.svg?v=a5f95d44f33f8df9e9970dbc67bded0c4ae91d5a346d0272d6ed812f78809b9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

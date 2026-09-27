export const name="dots-three-circle-light";
export const id="dl_2588190128a9429aaf36";
export const url=new URL("../icons/dots-three-circle-light.svg?v=38bde2f0f12904a531aa311cdbc37fc998168046680da0641f470813ddb94e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

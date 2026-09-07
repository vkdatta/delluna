export const name="heart-straight-bold";
export const id="dl_7b4a8e1594e84ebfb617";
export const url=new URL("../icons/heart-straight-bold.svg?v=8fe854eb8afca91ba8d58fcbe9bcb16ea031802132417bed40127fd9dde152bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
